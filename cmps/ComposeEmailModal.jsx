import { emailService } from '../services/email.service.js';

export class ComposeEmailModal extends React.Component {

    state = {
        email: {
            id: emailService.getEmailId(),
            subject: '',
            body: '',
            isRead: false,
            isStared: false,
            sentAt: null,
            to: '',
            from: 'Mahatma Appsus'
        }
    }

    componentDidMount() {
        // const emailId = emailService.getEmailId()
        console.log(this.state.email.id)
    }

    submitForm = (ev) => {
        ev.preventDefault()

        console.log(ev.target)
    }


    render() {
        return (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New Email</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form onSubmit={this.submitForm}>
                            <div className="modal-body">
                                <div class="mb-3">
                                    <label for="to-input" class="form-label">To:</label>
                                    <input type="email" class="form-control" id="to-input" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="subject-input" class="form-label">Subject:</label>
                                    <input type="text" class="form-control" id="subject-input"/>
                                </div>
                                <div class="mb-3">
                                    <label for="textarea-input" class="form-label">Textarea:</label>
                                    <textarea class="form-control" id="textarea-input" rows="4"></textarea>
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