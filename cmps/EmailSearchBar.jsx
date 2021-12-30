// const { NavLink, Link } = ReactRouterDOM


export function EmailSearchBar(props) {

    return (
        <nav className="search-container navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="email-search d-flex">
                    <input className="form-control me-2" type="search" placeholder={`Search in ${props.searchIn}`} aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}