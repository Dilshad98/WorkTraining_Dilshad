import { NavLink } from 'react-router-dom';
function Header(props){
    return(
        <div id="header">
			<div>
				<a href="index.html" className="logo"><img src="images/logo.png" alt=""/></a>
				<ul id="navigation">
					<li className={props.menuname == "Home" ? "selected" : ""}>
                        <NavLink className="nav-link" to="/Home" >Home</NavLink>
					</li>
					<li className={props.menuname == "About" ? "menu selected" : "menu"}>
                         <NavLink className="nav-link" to="/About" >About</NavLink>
						
						<ul className="primary" id={props.menuname == "Product" ? "selected" : ""}>
							<li>
                                <NavLink className="nav-link" to="/Product" >Product</NavLink>
							</li>
						</ul>
					</li>
					<li className={props.menuname == "Blog" ? "menu selected" : "menu"}>
                        <NavLink className="nav-link" to="/Blog" >Blog</NavLink>
						<ul className="secondary" id={props.menuname == "SinglePost" ? "selected" : ""} >
							<li>
                                <NavLink className="nav-link" to="/SinglePost" >SinglePost</NavLink>
							</li>
						</ul>
					</li>
					<li className={props.menuname == "Contact" ? "selected" : ""} >
                        <NavLink className="nav-link" to="/Contact" >Contact</NavLink>
					</li>
				</ul>
			</div>
        </div>
    )
}
export default Header;