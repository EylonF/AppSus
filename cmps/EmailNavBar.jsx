import { ComposeEmailModal } from './ComposeEmailModal.jsx';

export class EmailNavBar extends React.Component {

    state = {
        filterBy: {
            status: 'inbox',
            isStared: false,
        }

    }

    handelStatusChange = ({ target }) => {
        const newStatus = target.name
        if (newStatus === this.state.filterBy.status) return
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, status: newStatus } }), () => {

            this.props.onSetFilter({ status: this.state.filterBy.status })
        })


    }


    render() {
        return (
            <div className="email-nav-container">
                
                <button type="button" class="btn compose-btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+ Compose New Email</button>

                <ComposeEmailModal onComposeEmail={this.props.onComposeEmail}/>

                <nav className="nav flex-column">
                    <button onClick={this.handelStatusChange} name="inbox" className="btn email-nav-btn btn-primary">Inbox</button>
                    <button name="starred" className="btn email-nav-btn btn-primary">Starred</button>
                    <button onClick={this.handelStatusChange} name="sent" className="btn email-nav-btn btn-primary">Sent Mail</button>
                    <button name="trash" className="btn email-nav-btn btn-primary">Trash</button>
                </nav>
            </div>

        )

    }
}