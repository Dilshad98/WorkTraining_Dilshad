import Header from "./Header";
import Footer from "./Footer";


import React, { useState } from 'react';
function UpdateUser(){

    const[id,setId] = useState("");

    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const[mobile,setMobile] = useState("");
    const[address,setAddress]  = useState("");
    const [resjson0,setResjson0] = useState([]);
    const [resjson1,setResjson1] = useState([]);
    const [resjson2,setResjson2] = useState([]);
    const getBtn=()=>{
        console.log("ggg" + id);

        let param = {
           id: id
        }

        fetch("http://localhost:8080/ViewUser/"+id, {
            method: "GET",
           
         })

         .then(res=>res.json())

        .then(res=>{

                console.log(res);
                setUsername(res.username);
                setEmail(res.email);
                setAddress(res.address);
                setMobile(res.mobile);
                // setPwd(pwd);
                setResjson0(JSON.stringify(res));
                // if(res){
                //     console.log(res);
                // }else{
                //     setResjson(JSON.stringify(res.message));
                // }
        })
    }

    const updateBtn=()=>{
        console.log("ggg" + id);

        let param = {
            id:id,
            email: email,
            username:username,
            mobile:mobile,
            address:address
        }
      
        fetch("http://localhost:8080/user/update/"+id,{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(param)
         })

         .then(res=>res.json())

        .then(res=>{
                console.log(res);
                setResjson1(JSON.stringify(res));
                // if(res){
                //     console.log(res);
                // }else{
                //     setResjson(JSON.stringify(res.message));
                // }
        })
    }
    const deleteBtn=()=>{
        console.log("ggg" + id);

        
      
        fetch("http://localhost:8080/user/delete/"+id,{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            }
           
         })

         .then(res=>res.json())

        .then(res=>{
                console.log(res);
                setResjson2(JSON.stringify(res));
                // if(res){
                //     console.log(res);
                // }else{
                //     setResjson(JSON.stringify(res.message));
                // }
        })
    }
    return(

        <div>
           <Header  menubar="UpdateUser"/>

           <select name = "id" onChange={(e)=>setId(e.target.value)}>
                            <option defaultValue={""}hidden></option>
                            <option value="1"> User 1</option>
                            <option value="2"> User 2</option>
                            <option value="3"> User 3</option>
                            <option value="4"> User 4</option>
                            <option value="5"> User 5</option>
                            <option value="6"> User 6</option>
                            <option value="7"> User 7</option>
                            <option value="8"> User 8</option>
                            <option value="9"> User 9</option>
                            <option value="10"> User 10</option>
                        </select>
            <button type="submit" onClick={getBtn}>Get User</button>
            <div id="response0">{resjson0}</div>
            <button type="submit" onClick={deleteBtn}>Delete User</button>
            <div id="response2">{resjson2}</div>
            <div className="username">
                <label>Username:</label>
                <input
                type="text"
                // className={errorUsername?'errorMsg':""}
                id="usernameInp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                />
                {/* {errorUsername?<span class="errorMsg">Please Enter Username</span>:""} */}
            </div>
            {/* Email  */}
            <div className="email">
                <label>Email:</label>
                <input
                type="text"
                // className={errorEmail?'errorMsg':""}
                id="emailInp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                />
                {/* {errorEmail?<span class="errorMsg">Please Enter Email</span>:""} */}
            </div>

             {/* Mobile  */}
             <div className="mobile">
                <label>Mobile:</label>
                <input
                type="text"
                // className={errorMobile?'errorMsg':""}
                id="mobileInp"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile"
                />
                {/* {errorMobile?<span class="errorMsg">Please Enter Mobile</span>:""} */}
            </div>

              {/* Address  */}
              <div className="address">
                <label>Address:</label>
                <input
                type="text"
                // className={errorAddress?'errorMsg':""}
                id="addressInp"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                />
                {/* {errorAddress?<span class="errorMsg">Please Enter Address</span>:""} */}
            </div>

            {/* Password */}
             {/* <div className="pwd">
                <label >Password:</label>
                <input
                type="text" 
                className={errorPwd?'errorMsg':""}
                id="pwdInp"
                 value={pwd}
                 onChange={(e) => setPwd(e.target.value)}
                 placeholder="Enter Password"
                
                {errorPwd?<span class="errorMsg">Please Enter Password</span>:""} 
             </div>        */}
            <button type="submit" onClick={updateBtn}>Update User</button>

            <div id="response1">{resjson1}</div>

            <Footer/>
        </div>
    )

}
export default UpdateUser;