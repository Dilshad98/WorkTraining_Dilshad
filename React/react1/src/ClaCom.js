import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import './ClaCom.css';
import UserInfo from './UserInfo';

 class ClaCom extends Component  {
    constructor(){
        super();
        this.state={
            "name":"",
            "job":"",
            "ErrorName":"",
            "ErrorJob":"",
            "resjson":[],
            "UserInfo":[],
            "personList" : [
                {"name":"John",'age':76},
                {"name":"Mary",'age':36},
                {"name":"Helen",'age':65},
                {"name":"Susan",'age':21},
            ]

        }
    }

   

    submitBtn=()=>{
        if(this.state.name == "" ){
            this.setState({"ErrorName":true});
            
        }else if(this.state.job == ""){
            this.setState({"ErrorJob":true});
        }

        else{
            this.setState({"ErrorName":false});
            this.setState({"ErrorJob":false});
            let param = {
                name: this.state.name,
                job: this.state.job,
            };
            // fetch post method(api)
            fetch("https://reqres.in/api/users", {
                method: "POST",

                body: JSON.stringify(param), //convert the data to json string and send to the server
                headers: {
                "Content-Type": "application/json",
                token: "wfncwnviw",
                name: this.state.name,
                },
            })
                .then((res) => res.json())
                .then((res2) => {
                console.log(res2); // response from the server
                this.setState({"resjson":JSON.stringify(res2)});
            
                
                
                })
                .catch((err) => {
                console.log(err); // To display the error in the console log
                });

            // clearing the input box 
            this.setState({"name":""});
            this.setState({"job":""});
            
        }
    }

    // It will  load during page load
    componentDidMount(){
        console.log("Hello");
        this.getUserBtn(1);
    }
    
    getUserBtn=(pageNum)=>{
        console.log("hh");
        fetch("https://reqres.in/api/users?page="+pageNum)
        .then(res=>res.json())
        .then(res2=>{
            this.setState({"UserInfo":res2['data']});
            console.log(res2);
        })
    }


  render() {
    return (
      <div className="outline">

        <Header menubar="ClaCom"/>
        {/* Part 2.1 */}
        <h2>Part 2.1:</h2>
        {/* Post API */}

         {/* Name  */}
         <div className="name">
                <label>Name:</label>
                <input
                type="text"
                className={this.state.ErrorName?'errorMsg':""}
                id="nameInp"
                value={this.state.name}
                onChange={(e) => this.setState({"name":e.target.value})}
                placeholder="Enter Name"
                />
                {this.state.ErrorName?<span class="errorMsg">Please Enter Name</span>:""}
            </div>

            {/* Job */}
            <div className="job">
                <label >Job:</label>
                <input
                type="text"
                className={this.state.ErrorJob?'errorMsg':""}
                id="jobInp"
                value={this.state.job}
                onChange={(e) => this.setState({"job":e.target.value})}
                placeholder="Enter Job"
                />
                 {this.state.ErrorJob?<span class="errorMsg">Please Enter Job</span>:""}
            </div>
            {/* Button */}
            <input
                type="button"
                className="subBtn"
                value="Submit"
                onClick={this.submitBtn}
            />
            <div id="response">{this.state.resjson}</div>
            {/* Get API */}
            <h3>Get Users : </h3>
            <select onChange={(e)=>this.getUserBtn(e.target.value)}>
                <option value="1"> Page 1</option>
                <option value="2"> Page 2</option>
                <option value="3"> Page 3</option>
                <option value="4"> Page 4</option>
               

            </select>
            <div><button id="userBtn" onClick={this.getUserBtn}>Get Users</button></div>
            {/* Part 2.2 */}
            <UserInfo UserInfo={this.state.UserInfo}/>
           
            {/* Part 2.4 */}
            <h2>Part 2.4:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    
                    </tr>
               </thead> 
               <tbody>
                {
                    this.state.personList.map((personObj,personid)=>{
                        return( <tr className={personObj.age>50?'condi':""} key={personid}>
                                    <td  >{personObj.name}</td>
                                    <td >{personObj.age}</td>
                                </tr>)
                        
                        

                    }) 
                }
                </tbody>
            </table>
           
            <Footer/>
      </div>
    )
  }
}
export default ClaCom;


