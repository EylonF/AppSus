const { NavLink, Link } = ReactRouterDOM


export function EmailNavBar() {

    return (
        <nav className="nav flex-column">
            <NavLink exact to="/email/inbox"><p className="nav-link active">inbox</p></NavLink>
            <NavLink exact to="/email/starred"><p className="nav-link active">starred</p></NavLink>
            {/* <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a> */}
        </nav>
    )
}