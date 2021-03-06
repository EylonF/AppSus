import { utilService } from '../services/util.service.js'

export function EmailPreview({ email, onDeleteEmail }) {
    const { id, subject, body, isRead, sentAt, to, from } = email
    const formatedSubject = utilService.getFormatedSubject(subject)
    let formattedTime = utilService.getFormattedTime(sentAt)
    const isReadClass = (isRead) ? 'email-read' : ''
    return (
        <div className='email-preview-container'>

            <button type="button" class={`btn btn-outline-secondary email-preview ${isReadClass}`} id={id} data-bs-toggle="modal" data-bs-target={`#Email${id}Modal`}>
                <p>{from}</p>
                <p>{formatedSubject}</p>
                <p>{formattedTime}</p>
            </button>

            <button type="button" class="btn btn-star btn-warning"><i class="bi bi-star-fill"></i></button>
            <button type="button" class="btn btn-trash btn-danger" onClick={() => onDeleteEmail(id)}><i class="bi bi-trash-fill"></i></button>


            <div class="modal fade" id={`Email${id}Modal`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">From: {from}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h4>{subject}</h4>
                            <p>{body}</p>
                        </div>
                        <div class="modal-footer">
                            <small>Sent To: {to} | {formattedTime}</small>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

