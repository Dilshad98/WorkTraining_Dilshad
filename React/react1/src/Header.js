import './Header.css';
import logo from './logo1.png';
function Header(){
 
    return(
        <div>
            <img className='logo_pic' src={logo} alt="logo" />
    
            <ul className='Menu_Bar'>
                <li><a href="Home">Home</a></li>
                <li><a href="ProductList">Product List</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;