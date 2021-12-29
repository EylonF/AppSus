import { Home } from './pages/home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {


    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main>
                    <Switch>
                        {/* <Route component={Home} path="/"/>
                        <Route component={Home} path="/"/> */}
                        <Route component={Home} path="/"/>
                    </Switch>
                </main>

                <AppFooter />
            </section>

        </Router>

    )
}








// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }

// Some Basic routing:
// export class App extends React.Component {
//     state = {
//         page: 'home'
//     }
//     goPage = (page)=>{
//         this.setState({page})
//     }
//     render() {
//         const {page} = this.state
//         return <section className="app">
//             <header>
//                 <h1>My App</h1>
//                 <nav>
//                     <a href="#" onClick={()=>{
//                         this.goPage('home')
//                     }}>Home</a> |
//                     <a href="#" onClick={()=>{
//                         this.goPage('about')
//                     }}>About</a>
//                 </nav>
//             </header>
//             <main>
//                 {page === 'home' && <Home />}
//                 {page === 'about' && <About />}
//             </main>
//         </section>

//     }
// }

