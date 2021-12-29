const { NavLink, Link } = ReactRouterDOM

export function AppFooter() {

    return (
        <section className="app-footer">
            <div className="footer-container main-layout">

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