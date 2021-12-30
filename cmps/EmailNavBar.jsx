import { ComposeEmailModal } from './ComposeEmailModal.jsx';

const { NavLink, Link } = ReactRouterDOM


export class EmailNavBar extends React.Component {

    state = {
        filterBy: {
            status: 'inbox',
            isStared: false, // (optional property, if missing: show all)
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
                
                <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+ Compose</button>

                <ComposeEmailModal onComposeEmail={this.props.onComposeEmail}/>

                <nav className="nav flex-column">
                    <button onClick={this.handelStatusChange} name="inbox" className="btn btn-outline-primary">Inbox</button>
                    <p className="nav-link">Starred</p>
                    <button onClick={this.handelStatusChange} name="sent" className="btn btn-outline-primary">Sent Mail</button>
                    <p className="nav-link">Trash</p>
                </nav>
            </div>

        )

    }
}