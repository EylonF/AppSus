const { NavLink, Link } = ReactRouterDOM


export function EmailNavBar() {

    return (
            <div className="email-nav-container">

            <button type="button" class="btn btn-outline-warning">+ Compose</button>
            <nav className="nav flex-column">
                <NavLink exact to="/email/inbox"><p className="nav-link active">Inbox</p></NavLink>
                <NavLink exact to="/email/starred"><p className="nav-link">Starred</p></NavLink>
                <NavLink exact to="/email/sent"><p className="nav-link">Sent Mail</p></NavLink>
                <NavLink exact to="/email/draft"><p className="nav-link">Draft</p></NavLink>
            </nav>
            </div>

    )
}