import { emailService } from '../services/email.service.js'
import { EmailSearchBar } from '../cmps/EmailSearchBar.jsx'
import { EmailNavBar } from '../cmps/EmailNavBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'




export class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            status: 'inbox',
            txt: '', 
            isRead: false,
            isStared: false, 
        },


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

    onDeleteEmail = (emailId) => {
		emailService.deleteEmail(emailId).then(() => {
			this.loadEmails()
		})
	}

    render() {

        const { emails, filterBy  } = this.state
        return (
            <section className="email-app main-layout">

                <EmailSearchBar searchIn={filterBy.status} />
                <div className="main-content main-layout">
                    <EmailNavBar onSetFilter={this.onSetFilter} onComposeEmail={this.onComposeEmail} />
                    <EmailList emails={emails} onDeleteEmail={this.onDeleteEmail}/>
                </div>
            </section>
        )
    }


}