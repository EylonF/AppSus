import {EmailPreview} from './EmailPreview.jsx'

export function EmailList({emails}) {
    // console.log('email fro list',emails)
    return (
        <section className="email-list">
            {emails.map(email => <EmailPreview email={email}/>)}
        </section>
    )
}