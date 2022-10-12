import { useEffect, useState } from 'react';
import './Header.css';
import logo from './logo1.png';
function Header(props){
 
    // Part 1
    const [LoginStatus,setLoginStatus] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("token") != undefined && localStorage.getItem("token") != ''){
            setLoginStatus(true);
        }else{
            setLoginStatus(false);
        }
    },[])
    

    return(
        <div>
            <img className='logo_pic' src={logo} alt="logo" />
    
            <ul className='Menu_Bar'>
                {/* Part 2.3 */}
                <li className={props.menubar =='Home'?"active":''}><a href="Home">Home</a></li>
                <li className={props.menubar =='ProductList'?"active":''}><a href="ProductList">Product List</a></li>
                <li className={props.menubar =='About'?"active":''}><a href="About">About</a></li>
                <li className={props.menubar =='Contact'?"active":''}><a href="Contact">Contact</a></li>
                <li className={props.menubar =='ClaCom'?"active":''}><a href="ClaCom">ClaCom</a></li>
                <li className={props.menubar =='Login'?"active":''}><a href="Login">Login</a></li>
                <li className={props.menubar =='Register'?"active":''}><a href="Register">Register</a></li>
                <li className={props.menubar =='UpdateUser'?"active":''}><a href="UpdateUser">Update</a></li>
                {/* {LoginStatus?<li><a href="#">Logout</a></li>:<li><a>Login</a></li>} */}
            </ul>
        </div>
    )
}

export default Header;