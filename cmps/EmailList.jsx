import {EmailPreview} from './EmailPreview.jsx'

export function EmailList({emails,onDeleteEmail}) {
    console.log('email fro list',emails)
    return (
        <section className="email-list">
            
            {emails.map(email => <EmailPreview email={email} onDeleteEmail={onDeleteEmail}/>)}
        </section>
    )
}