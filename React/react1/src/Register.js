import Header from "./Header";
import Footer from "./Footer";
import './Register.css';

import React, { useState } from 'react';
function Register(){
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const[mobile,setMobile] = useState("");
    const[address,setAddress]  = useState("");
    const [resjson,setResjson] = useState([]);

    const [errorEmail,setErrorEmail] = useState();
    const [errorPwd,setErrorPwd] = useState();
    const[errorUsername,setErrorUsername]= useState();
    const[errorMobile,setErrorMobile] = useState("");
    const[errorAddress,setErrorAddress]  = useState("");

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
                username:username,
                password: pwd,
                mobile:mobile,
                address:address
            }
          
            fetch("http://localhost:8080/Register", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(param)
             })

             .then(res=>res.json())

            .then(res=>{

                    console.log(res);
                    setResjson(JSON.stringify(res));
                    // if(res){
                    //     console.log(res);
                    // }else{
                    //     setResjson(JSON.stringify(res.message));
                    // }
            })
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

    }

    return(

        <div>
            <Header menubar="Register"/>
            {/* Main Content  */}
            <h2>Register</h2>
             {/* Email  */}
             <div className="username">
                <label>Username:</label>
                <input
                type="text"
                className={errorUsername?'errorMsg':""}
                id="usernameInp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                />
                {errorUsername?<span class="errorMsg">Please Enter Username</span>:""}
            </div>
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

             {/* Mobile  */}
             <div className="mobile">
                <label>Mobile:</label>
                <input
                type="text"
                className={errorMobile?'errorMsg':""}
                id="mobileInp"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile"
                />
                {errorMobile?<span class="errorMsg">Please Enter Mobile</span>:""}
            </div>

              {/* Address  */}
              <div className="address">
                <label>Address:</label>
                <input
                type="text"
                className={errorAddress?'errorMsg':""}
                id="addressInp"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                />
                {errorAddress?<span class="errorMsg">Please Enter Address</span>:""}
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
    )
}
export default Register;