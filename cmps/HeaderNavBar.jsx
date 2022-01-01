const { NavLink} = ReactRouterDOM


export function HeaderNavBar() {

    return (
        <div className="dropstart">
  <div className="icon nav-icon-1 dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>  
 
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><NavLink exact to="/"><p className="dropdown-item">Home</p></NavLink></li>
    <li><NavLink exact to="/email"><p className="dropdown-item">Email app</p></NavLink></li>
    <li><NavLink exact to="/note"><p className="dropdown-item">Note app</p></NavLink></li>
  </ul>
</div>
    )
}