import {utilService} from '../services/util.service.js'

export function EmailPreview({ email }) {
    // console.log('email from preview', email)
    const { id, subject, body, isRead, sentAt, to } = email

    let formattedTime = utilService.getFormattedTime(sentAt)

    return (
        <article className="email-preview" id={id}>
            <p>&#9733;</p>
            <p>{to}</p>
            <p>{subject}</p>
            <p>{formattedTime}</p>
        </article>
    )
}

