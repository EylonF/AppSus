const { NavLink, Link } = ReactRouterDOM

export function AppFooter() {

    return (
        <section className="app-footer">
            <div className="footer-container main-layout">

                <h1>APP<span>SUS</span></h1>
                <img src="../assets/img/sus-logo.png" alt="" />
                <small>© coffe-rights 2021</small>
            </div>
        </section>
    )
}