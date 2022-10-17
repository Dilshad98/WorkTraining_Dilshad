import Header from "./Header";
import Footer from "./Footer";
import './Login.css';

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { httpPostWithoutHeader } from "./HttpFetch.js";
function Login(){
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const [resjson,setResjson] = useState([]);
    const [errorEmail,setErrorEmail] = useState();
    const [errorPwd,setErrorPwd] = useState();
    let navigate = useNavigate(); 


    const submitBtn=()=>{
        // if(email == "" ){
        //         setErrorEmail(true);
        // }else if(pwd == ""){
        //     setErrorPwd(true);
        // }

        //  else{
            // setErrorEmail(false);
            // setErrorPwd(false);
            let param = {
                email: email,
                password: pwd,
            }
          
            httpPostWithoutHeader("LoginUser", param)
             .then(res=>{
                if(!res.ok){
                    throw res;
                }
                return res.json();
            })

            .then(res=>{
                    if(res.status)
                    console.log(res);
                    setResjson(JSON.stringify(res));
                    localStorage.setItem("Full_Res",JSON.stringify(res));
                    localStorage.setItem("token",res["token"]);
                    localStorage.setItem("id",res["id"]);
                    navigate("/Home");
                    
            }).catch(e =>{
                
                    alert("login Failed !!!");
                })
               
            }
            // .then((res) =>{
            //     if(!res.ok){
            //         throw res;
            //     }else{
            //         res.json()
            //     }
            // } )
            // .then(res2=>{
            //     console.log(res2);
            // }).catch((err) => {
            //         console.log(err); // To display the error in the console log
            // });

            // // clearing the input box and textarea
            // setEmail('');
            // setPwd('');
      // }

    
    return(

        <div>
            <Header menubar="Login" isLoginPg="true"/>
            {/* Main Content  */}
            <h2>Login</h2>
          
            {/* Email  */}
            <div className="email">
                <label>Email:</label>
                <input
                type="text"
                className={errorEmail?'errorMsg':""}
                id="emailInp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                />
                {errorEmail?<span class="errorMsg">Please Enter Email</span>:""}
            </div>

            {/* Password */}
            <div className="pwd">
                <label >Password:</label>
                <input
                type="text"
                className={errorPwd?'errorMsg':""}
                id="pwdInp"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Enter Password"
                />
                 {errorPwd?<span class="errorMsg">Please Enter Password</span>:""}
            </div>
            {/* Button */}
            <input
                type="button"
                className="subBtn"
                value="Submit"
                onClick={submitBtn}
            />
               
            <div id="response">{resjson}</div>
            <Footer/>
        </div>
    );

}
export default Login;