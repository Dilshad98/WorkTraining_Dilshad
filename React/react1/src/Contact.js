
import Header from "./Header";
import Footer from "./Footer";
import './Contact.css';


function Contact(){
    return(
        <div>
            <Header/>
             {/* Main Content  */}
            <h2>Contact Us</h2>

            <form action="" method="post">
                <div className="f_name">
                    <label for="Fname">First Name: </label>
                    
                     <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    /> 
                  
                </div>
                <div className="l_name">
                    <label for="lname">Last Name:  </label>
                    <input type="text" name="lastname"  placeholder="Enter your last name" />
                </div>
                <div className="email">
                    <label for="email">Email: </label>
                    <input type="email" name="email_id" placeholder="Enter your email" />
                </div>
                <div className="phone_num">
                    <label for="phone">Phone:</label>
                    <input type="text" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="message">
                    <label for="msg">Message:</label>
                    <div className="msg_textarea">
                    <textarea name="msg" rows="3" cols="33"></textarea>
                    </div>
                </div>
                <div className="btn_sub">
                    <input type="button" name="btn_submit" value="Submit" />
                </div>
            </form>
            <Footer/>
        </div>
    )
}
export default Contact;