import { emailService } from '../services/email.service.js'
import { EmailSearchBar } from '../cmps/EmailSearchBar.jsx'
import { EmailNavBar } from '../cmps/EmailNavBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'
import { UserMsg } from '../cmps/UserMsg.jsx';




export class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            status: 'inbox',
            txt: '', // no need to support complex text search
            isRead: false, // (optional property, if missing: show all)
            isStared: false, // (optional property, if missing: show all)
        },
        emailSent: true


    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        const { filterBy } = this.state
        console.log('filter by from loadmails', filterBy)
        emailService.query(filterBy).then(emails => {

            this.setState({ emails })
        })
    }

    onSetFilter = (value) => {

        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, status: value.status } }), () => {
            this.loadEmails()
        })
    }

    onComposeEmail = () => {
        this.loadEmails()
    }

    toggleUserMsg = () => {
        this.setState({ emailSent: !emailSent })
        console.log('toogle modal', this.state.emailSent)
    }

    render() {

        const { emails, filterBy, emailSent } = this.state
        return (
            <section className="email-app main-layout">
                {(emailSent) && < UserMsg msg='email successfully sent' />}

                <EmailSearchBar searchIn={filterBy.status} />
                <div className="main-content main-layout">
                    <EmailNavBar onSetFilter={this.onSetFilter} onComposeEmail={this.onComposeEmail} />
                    <EmailList emails={emails} />
                </div>
            </section>
        )
    }


}