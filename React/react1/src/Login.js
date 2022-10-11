import Header from "./Header";
import Footer from "./Footer";
import './Login.css';

import React, { useState } from 'react';
function Login(){
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");

    const [errorEmail,setErrorEmail] = useState();
    const [errorPwd,setErrorPwd] = useState();
    const submitBtn=()=>{
        if(email == "" ){
                setErrorEmail(true);
        }else if(pwd == ""){
            setErrorPwd(true);
        }

         else{
            setErrorEmail(false);
            setErrorPwd(false);
            let param = {
                email: email,
                pwd: pwd,
            };
            // fetch post method(api)
            fetch("http://localhost:8080/Login", {
                method: "POST",

                body: JSON.stringify(param), //convert the data to json string and send to the server
                headers: {
                "Content-Type": "application/json",
                token: "wfncwnviw",
                
                },
            })
                .then((res) => res.json())
                .then((res2) => {
                console.log(res2); // response from the server
                // setResjson(JSON.stringify(res2));
                
                
                })
                .catch((err) => {
                console.log(err); // To display the error in the console log
                });

            // // clearing the input box and textarea
            // setEmail('');
            // setPwd('');
        }

    }
    return(

        <div>
            <Header menubar="Login"/>
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
                placeholder="Enter Job"
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
               

            <Footer/>
        </div>
    )

}
export default Login;