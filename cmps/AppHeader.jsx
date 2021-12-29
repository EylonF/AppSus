
const { NavLink, Link } = ReactRouterDOM

export function AppHeader() {

    return (
        <section className="app-header">
            <div className="header-container">

                <h1>APP<span>SUS</span></h1>
                <img src="../assets/img/sus-logo.png" alt="" />
                {/* <Link exect to="/home"><h1>APPSUS</h1><img src="../assets/img/sus-logo.png" alt="" /></Link> */}
                
                {/* <nav className="main-nav">
                    <NavLink exact to="/"><p>Home</p></NavLink>
                    <NavLink to="/book"><p>Books Shop</p></NavLink>
                    <NavLink to="/about"><p>About</p></NavLink>
                </nav> */}
            </div>
        </section>
    )
}