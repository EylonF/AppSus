import { utilService } from '../services/util.service.js'

export function EmailPreview({ email }) {
    // console.log('email from preview', email)
    const { id, subject, body, isRead, sentAt, to, from } = email

    let formattedTime = utilService.getFormattedTime(sentAt)
    const isReadClass = (isRead) ? 'email-read' : ''
    return (
        <React.Fragment>
            <button type="button" class={`btn btn-outline-secondary email-preview ${isReadClass}`} id={id} data-bs-toggle="modal" data-bs-target={`#Email${id}Modal`}>
                {/* <p>&#9733;</p> */}
                {/* <i class="bi bi-star"></i> */}
                <p>{to}</p>
                <p>{subject}</p>
                <p>{formattedTime}</p>
            </button>


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
        </React.Fragment>


        // <div className={`email-preview ${isReadClass}`} id={id}>
        // {/* <p>&#9733;</p> */}
        // <p>{to}</p>
        // <p>{subject}</p>
        // <p>{formattedTime}</p>
        // </div>
    )
}

