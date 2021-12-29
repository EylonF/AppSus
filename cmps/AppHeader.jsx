import { HeaderNavBar } from './HeaderNavBar.jsx'
const { NavLink, Link } = ReactRouterDOM

export function AppHeader() {

    return (
        <section className="app-header">
            <div className="header-container main-layout">
                <Link exect to="/">
                <div className="logo-container">
                    <h1>APP<span>SUS</span></h1>
                    <img src="assets/img/sus-logo.png" alt="" />
                </div>

                </Link>
                <HeaderNavBar />
                
            </div>
        </section>
    )
}