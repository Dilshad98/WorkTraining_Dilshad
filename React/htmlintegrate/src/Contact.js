import Footer from "./Footer";
import Header from "./Header";
import {useState } from 'react';
function Contact(){

    const [name,setName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");
    const[address,setAddress] = useState("");
    const[message,setMessage] = useState("");

    const[ErrorName,setErrorName] = useState("");
    const[ErrorPhone,setErrorPhone] = useState("");
    const[ErrorEmail,setErrorEmail] = useState("");
    const[ErrorAddress,setErrorAddress] = useState("");
    const[ErrorMessage,setErrorMessage] = useState("");

    const submitBtn=()=>{
        if(name == "" ){
            setErrorName(true);
           
            
        }else{

            setErrorName(false);
            console.log("Thank you submitting");
        }
    }
    return(
        <>
            <Header/>
            <div className="blue_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   

            <div id="contact" className="contact">
                <div className="con_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                            <form id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <input className="contactus "  onChange={(e) => setName(e.target.value)} placeholder="Name"type="type" name="Name"/> 
                                        {ErrorName?<span class="errorMsg">Please Enter Name</span>:""}
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <input className="contactus"  onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" type="type" name="Phone Number"/> 
                                        {ErrorPhone?<span class="errorMsg">Please Enter Phone Number</span>:""}
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <input className="contactus"  onChange={(e) => setEmail(e.target.value)}placeholder="Email" type="type" name="Email"/>                          
                                        {ErrorEmail?<span class="errorMsg">Please Enter Email</span>:""}
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <input className="contactus"  onChange={(e) => setAddress(e.target.value)} placeholder="Address" type="type" name="Address"/>                          
                                        {ErrorAddress?<span class="errorMsg">Please Enter Address</span>:""}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactusmess"   onChange={(e) => setMessage(e.target.value)} placeholder="Message" type="type" Message="Name"/>
                                        {ErrorMessage?<span class="errorMsg">Please Enter Message</span>:""}
                                    </div>
                                    <div className="col-md-12">
                                        <button className="send_btn" onClick={submitBtn}>Send</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            
            <Footer/> 
        </> 
    )
}
export default Contact;