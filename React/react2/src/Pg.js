import './Pg.css';
import React, { useState } from 'react';
function Pg(){
    // Create variables 
    const [name,setName] = useState("");
    const [job,setJob] = useState("");
    const [resjson,setResjson] = useState([]);
    const [errorName,setErrorName] = useState();
    const [errorJob,setErrorJob] = useState();
    const [userInfo,setUserInfo] = useState([]);
   
    const [fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    const[email,setEmail] = useState("");
    const[uid,setUid] = useState("");
    const[image,setImage] = useState("");

    const [click,setClick] = useState(false);
    let personList = [
        {"name":"John",'age':76},
        {"name":"Mary",'age':36},
        {"name":"Helen",'age':65},
        {"name":"Susan",'age':21},
    ];

    const submitBtn=()=>{
        if(name == "" ){
                setErrorName(true);
        }else if(job == ""){
            setErrorJob(true);
        }

         else{
            setErrorName(false);
            setErrorJob(false);
            let param = {
                name: name,
                job: job,
            };
            // fetch post method(api)
            fetch("https://reqres.in/api/users", {
                method: "POST",

                body: JSON.stringify(param), //convert the data to json string and send to the server
                headers: {
                "Content-Type": "application/json",
                token: "wfncwnviw",
                name: name,
                },
            })
                .then((res) => res.json())
                .then((res2) => {
                console.log(res2); // response from the server
                setResjson(JSON.stringify(res2));
                
                
                })
                .catch((err) => {
                console.log(err); // To display the error in the console log
                });

            // clearing the input box and textarea
            setName('');
            setJob('');
        }

    }

    const getUserBtn = (pageNum)=>{
        fetch("https://reqres.in/api/users?page="+pageNum)
        .then(res=>res.json())
        .then(res2=>{
            setUserInfo(res2['data']);
            console.log(res2);
        })
    }
    // const showLastName=(obj)=>{
    //     console.log(obj);
    //     alert(obj.last_name);
    // }

    const moreInfo=(userInfoObj)=>{
        setClick(true);
        console.log(userInfoObj);
        setFname(userInfoObj.first_name);
        setLname(userInfoObj.last_name);
        setEmail(userInfoObj.email);
        setUid(userInfoObj.id);
        setImage(userInfoObj.avatar);
    }
    return(
        <div className='outline'>
            {/* Part 1  */}
            <h2>Part 1:</h2>
            {/* Name  */}
            <div className="name">
                <label>Name:</label>
                <input
                type="text"
                className={errorName?'errorMsg':""}
                id="nameInp"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                />
                {errorName?<span class="errorMsg">Please Enter Name</span>:""}
            </div>

            {/* Job */}
            <div className="job">
                <label >Job:</label>
                <input
                type="text"
                className={errorJob?'errorMsg':""}
                id="jobInp"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Enter Job"
                />
                 {errorJob?<span class="errorMsg">Please Enter Job</span>:""}
            </div>
            {/* Button */}
            <input
                type="button"
                className="subBtn"
                value="Submit"
                onClick={submitBtn}
            />
               
           
            <div id="response">{resjson}</div>
            {/* <div id="response">The name is {resjson.name}, job is {resjson.job}, id is {resjson.id} and created at : {resjson.createdAt}</div> */}

            {/* Part 2 */}
            <h2>Part 2:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    
                    </tr>
               </thead> 
               <tbody>
                {
                    personList.map((personObj,personid)=>{
                        return( <tr className={personObj.age>50?'condi':""} key={personid}>
                                    <td  >{personObj.name}</td>
                                    <td >{personObj.age}</td>
                                </tr>)
                        
                        

                    }) 
                }
                </tbody>
            </table>

            {/* Part 3 */}
            <h2>Part 3:</h2>
            <select onChange={(e)=>getUserBtn(e.target.value)}>
                <option value="1"> Page 1</option>
                <option value="2"> Page 2</option>
                <option value="3"> Page 3</option>
                <option value="4"> Page 4</option>
               

            </select>
            <div><button id="userBtn" onClick={getUserBtn}>Get Users</button></div>
            {(userInfo.length <=0)?<span>No User Found</span>:
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Avatar</th>
                        
                        </tr>
                    </thead> 
                    <tbody>
                    
                    {
                    
                    userInfo.map((userInfoObj,userid)=>{
                        return (<tr onClick={()=>moreInfo(userInfoObj)} key={userid}> 
                                    <td>{userInfoObj.first_name}</td>
                                    <td><img src={userInfoObj.avatar} alt="avatar" width="50%"/></td>
                                </tr>)
                    }) 
                    }
                    </tbody>
                </table>
            }
            {/* Part 4 */}
            {click ?  
                
                <div className="box">
                    <img className="ava" src={image}></img>
                    <h3>ID: {uid}</h3>
                    <h3>First Name: {fname} </h3> 
                    <h3>Last Name: {lname} </h3> 
                    <h3>Email: {email}</h3>
                
                    
                    
                </div>  
            :""}
        </div>
    )
}

export default Pg;