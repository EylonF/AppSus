import { emailService } from '../services/email.service.js';
import { UserMsg } from '../cmps/UserMsg.jsx';


export class ComposeEmailModal extends React.Component {

    state = {
        email: {
            id: emailService.getEmailId(),
            subject: '',
            body: '',
            isRead: false,
            isStared: false,
            sentAt: new Date(),
            to: '',
            from: 'Mahatma Appsus'
        },
        emailSent: false,

    }

    componentDidMount() {
    }

    submitForm = (ev) => {
        ev.preventDefault()
        emailService.addEmail(this.state.email).then(this.setState(
            {
                email: {
                    id: emailService.getEmailId(),
                    subject: '',
                    body: '',
                    isRead: false,
                    isStared: false,
                    sentAt: new Date(),
                    to: '',
                    from: 'Mahatma Appsus'
                },
                emailSent: true,

            }

        ),
            this.toggleUserMsg()

        ).catch(console.log('somthing went wrong'))
        this.props.onComposeEmail()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({ email: { ...prevState.email, [field]: value } }))
        console.log(this.state.email[field])
    }

    toggleUserMsg = () => {
setTimeout(() => {
    
    this.setState((prevState) => ({ ...prevState, emailSent: false }))
}, 2000);

        // console.log('toogle modal', this.state.emailSent)
    }


    render() {
        const { emailSent } = this.state
        const { subject, body, to } = this.state.email
        return (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New Email</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {(emailSent) && < UserMsg msg='email successfully sent' type='success' />}
                        {/* {(!emailSent) && < UserMsg msg='somthing went wrong' type='danger'/>} */}

                        <form onSubmit={this.submitForm}>
                            <div className="modal-body">
                                <div class="mb-3">
                                    <label for="to-input" class="form-label">To:</label>
                                    <input type="email" class="form-control" id="to-input" name="to" value={to} placeholder="name@example.com" onChange={this.handleChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="subject-input" class="form-label">Subject:</label>
                                    <input type="text" class="form-control" id="subject-input" name="subject" value={subject} onChange={this.handleChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="textarea-input" class="form-label">Textarea:</label>
                                    <textarea class="form-control" id="textarea-input" name="body" value={body} rows="4" onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}