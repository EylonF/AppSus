import { emailService } from '../services/email.service.js'
import { EmailSearchBar } from '../cmps/EmailSearchBar.jsx'
import { EmailNavBar } from '../cmps/EmailNavBar.jsx'
import { EmailList } from '../cmps/EmailList.jsx'



export class EmailApp extends React.Component {

    state = {
        emails: [],
        filterBy: {
            status: 'inbox',
            txt: '', // no need to support complex text search
            isRead: false, // (optional property, if missing: show all)
            isStared: false, // (optional property, if missing: show all)
        }

    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        const { filterBy } = this.state
        console.log('filter by from loadmails', filterBy)
        emailService.query(filterBy).then(emails => {
            // eventBusService.emit('books-count', books.length)

            // console.log(emails)
            this.setState({ emails })
        })
    }

    onSetFilter = (value) => {
        // console.log('value',value)
        // this.setState({filterBy},this.loadEmails)
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, status: value.status } }), () => {
            this.loadEmails()
        })
    }

    onComposeEmail = (email) => {
        console.log(email)
    }

    render() {
        const { emails } = this.state
        return (
            <section className="email-app">
                
                <EmailSearchBar />
                <div className="main-content">
                    <EmailNavBar onSetFilter={this.onSetFilter} onComposeEmail={this.onComposeEmail}/>
                    <EmailList emails={emails} />
                </div>
            </section>
        )
    }


}