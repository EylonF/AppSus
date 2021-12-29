import { emailService } from '../services/email.service.js'
import { EmailFilterBar } from '../cmps/EmailFilterBar.jsx'
import { EmailNavBar } from '../cmps/EmailNavBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'



export class EmailApp extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails()
        console.log('EmailApp did mount')
    }

    loadEmails = () => {
        // const {filterBy} = this.state
        emailService.query().then(emails => {
            // eventBusService.emit('books-count', books.length)

            // console.log(emails)
            this.setState({ emails })
        })
    }

    render() {
        const {emails} = this.state
        return (
            <section className="email-app">
                <EmailFilterBar/>
                <div className="main-content">
                <EmailNavBar/>
                <EmailList emails={emails}/>
                </div>
            </section>
        )
    }


}