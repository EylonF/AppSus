import { utilService } from '../services/util.service.js'

export function EmailPreview({ email }) {
    // console.log('email from preview', email)
    const { id, subject, body, isRead, sentAt, to } = email

    let formattedTime = utilService.getFormattedTime(sentAt)
    const isReadClass = (isRead) ? 'email-read' : ''
    return (

        // <div class={`accordion-item email-preview ${isReadClass}`}>
        //     <h2 class="accordion-header" id="headingOne">
        //         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //             <p>&#9733;</p>
        //             <p>{to}</p>
        //             <p>{subject}</p>
        //             <p>{formattedTime}</p>
        //         </button>
        //     </h2>
        //     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //         <div class="accordion-body">
        //             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        //         </div>
        //     </div>
        // </div>


        <article className={`email-preview ${isReadClass}`} id={id}>
        <p>&#9733;</p>
        <p>{to}</p>
        <p>{subject}</p>
        <p>{formattedTime}</p>
        </article>
    )
}

