
const { NavLink, Link } = ReactRouterDOM


export class Home extends React.Component {

    render() {
        return (
            <section className="main-hero main-layout">
                <h2>Welcome to</h2>   
                <h1>APP<span>SUS</span></h1>
                <img src="assets/img/sus-logo.png" alt="" />
                <div className="btn-container">
                    <NavLink exact to="/email"><button className="btn-home1">Email App</button></NavLink>
                
                    <NavLink exact to="/note"><button className="btn-home2">Note App</button></NavLink>
                </div>
            </section>
        )
    }
}

