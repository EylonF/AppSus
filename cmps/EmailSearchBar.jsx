// const { NavLink, Link } = ReactRouterDOM


export function EmailSearchBar() {

    return (
        <nav className="search-container navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="email-search d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}