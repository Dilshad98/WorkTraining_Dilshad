import React, { useState } from 'react';
import './UserInfo.css';

function UserInfo(props){

    const [click,setClick] = useState(false);

    const [fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("");
    const[uid,setUid] = useState("");
    const[image,setImage] = useState("");

    const moreInfo=(userInfoObj)=>{
        setClick(true);
        
        setFname(userInfoObj.first_name);
        setLname(userInfoObj.last_name);
        setEmail(userInfoObj.email);
        setUid(userInfoObj.id);
        setImage(userInfoObj.avatar);
    }
    return(
        <>
            <h1>User Info</h1>
            {(props.UserInfo.length <=0)?<span>No User Found</span>:
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Avatar</th>
                    
                    </tr>
                </thead> 
                <tbody>
                
                {
                
                props.UserInfo.map((userInfoObj,userid)=>{
                    return (<tr onClick={()=>moreInfo(userInfoObj)} key={userid}> 
                                <td>{userInfoObj.first_name}</td>
                                <td><img src={userInfoObj.avatar} alt="avatar" width="50%"/></td>
                            </tr>)
                }) 
                }
                </tbody>
            </table>
            } 

            {click ?  
                    
                    <div className="box">
                        <img className="ava" src={image}></img>
                        <h3>ID: {uid}</h3>
                        <h3>First Name: {fname} </h3> 
                        <h3>Last Name: {lname} </h3> 
                        <h3>Email: {email}</h3>
                    
                        
                        
                    </div>  
            :""}
        </>
    )
}

export default UserInfo;