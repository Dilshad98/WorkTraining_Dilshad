import { useEffect, useState } from 'react';
import './Header.css';
import logo from './logo1.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { httpPostWithHeader } from './HttpFetch';

function Header(props){
 
   
    const [LoginStatus,setLoginStatus] = useState(false);
    let navigate = useNavigate(); 
    const validateLoginToken=()=>{
        let token = localStorage.getItem("token");
        if( token == undefined || token == ""){
            setLoginStatus(false);
        }else{
            setLoginStatus(true);
        }
    }
    useEffect(validateLoginToken,[]);

    // useEffect(()=>{
    //     if(localStorage.getItem("token") != undefined && localStorage.getItem("token") != ''){
    //         setLoginStatus(true);
    //     }else{
    //         setLoginStatus(false);
    //     }
    // },[])

    const logoutBtn=()=>{
        let id = localStorage.getItem("id"); 
        let token = localStorage.getItem("token"); 
        httpPostWithHeader("logout/"+id)
        .then(res=>{
              if(!res.ok){
                 throw res;
              }
               return res.json();
              }
           )
           .then(ress2=>{
               
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                localStorage.removeItem("Full_Res");
                navigate("/Login");
                
  
           }).catch(e=>{
  
           e.json().then(err=>{
              console.log("Error fetching ",err)
              alert("Error fetching");
           });
           
        })
     }
    

    return(
        <div>
            <img className='logo_pic' src={logo} alt="logo" />
    
            <ul className='Menu_Bar'>
               
                 {LoginStatus?<> 
                    <li className={props.menubar =='Home'?"active":''}>
                  
                    <a href="Home">Home</a></li>
                </>:null} 

                {LoginStatus?<>
                    <li className={props.menubar =='ProductList'?"active":''}><a href="ProductList">Product List</a></li>
                </>:null}
                
                {LoginStatus?<> 
                    <li className={props.menubar =='About'?"active":''}><a href="About">About</a></li>
                </>:null} 

                {LoginStatus?<>
                    <li className={props.menubar =='Contact'?"active":''}><a href="Contact">Contact</a></li>
                </>:null} 
                {/* <li className={props.menubar =='ClaCom'?"active":''}><a href="ClaCom">ClaCom</a></li> */}
                 {!LoginStatus?<>
                    <li className={props.menubar =='Login'?"active":''}><a href="Login">Login</a></li>
                    <li className={props.menubar =='Register'?"active":''}><a href="Register">Register</a></li>
                </>:null}
            
                {LoginStatus?<>
                    <li className={props.menubar =='UpdateUser'?"active":''}><a href="UpdateUser">Update</a></li>
                </>:null}

                {LoginStatus?<>
                    <li className="Login" onClick={logoutBtn}>
                    <a className="nav-link" href="#">Logout</a>
                    </li></>:null}
                {/* {LoginStatus?<li><a href="#">Logout</a></li>:<li><a>Login</a></li>} */}
            </ul>
        </div>
    )
}

export default Header;