
const { NavLink, Link } = ReactRouterDOM


export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="main-hero">
                    <h2><span className="letter1">W</span>
                        <span className="letter2">e</span>
                        <span className="letter3">l</span>
                        <span className="letter4">c</span>
                        <span className="letter5">0</span>
                        <span className="letter6">m</span>
                        <span className="letter7">e</span> <span className="letter8">t</span>
                        <span className="letter9">0</span></h2>
                    <h1><span className="logoLetter1">A</span><span className="logoLetter2">P</span><span className="logoLetter3">P</span><span className="logo"><span className="logoLetter4">S</span><span className="logoLetter5">U</span><span className="logoLetter6">S</span></span></h1>
                    <img className="logoImg" src="assets/img/sus-logo.png" alt="" />
                    <div className="btn-container">
                        <NavLink exact to="/email"><button className="btn-home1">Email App</button></NavLink>

                        <NavLink exact to="/note"><button className="btn-home2">Note App</button></NavLink>
                    </div>
                </section>
                <img className="background-img" src="assets/img/dark.jpg" alt="" />

            </React.Fragment>

        )
    }
}



<span className="letter1"></span>
