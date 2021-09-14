import React, {useState, useEffect}from 'react'
import BACKEND_URL from "../config";
import axios from 'axios';

const ContactForm = ({ isShowContact }) => {

    const [name, getName] = useState("");
    const [email, getEmail] = useState("");
    const [subject, getSubject] = useState("");
    const [message, getMessage] = useState("");
    
    const onChangeName = (e) => {
        getName(e.target.value);
    }
    const onChangeEmail = (e) => {
        getEmail(e.target.value);
    }
    const onChangeSubject = (e) => {
        getSubject(e.target.value);
    }
    const onChangeMessage = (e) => {
        getMessage(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    
        const User = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
    
       axios.post(BACKEND_URL +'/Contact/add', User)
       .then(res => console.log(res.data))
       .catch(err => console.log(err));
    }

    return (
        <div className={ `${!isShowContact ? "active" : ""} show`} >
        <div className="contact-form">
            <div className="form-box-2 solid">
            <form action="/" method="POST" onSubmit={onSubmit}>
                <h1 className="contact-text"> Contact us</h1>
                <label>Name</label>
                <input type="text"
                name="name"
                className="contact-box"
                onChange={onChangeName} required
                /> <br /><br />
                <label>Email</label>
                <input type="text"
                email="email"
                className="contact-box"
                onChange={onChangeEmail} required
                /> <br /><br />
                <label>Subject</label>
                <input type="text"
                name="subject"
                className="contact-box"
                onChange={onChangeSubject} required
                /> <br /><br />
                <label>Message</label>
                <input 
                type="text"
                name="message"
                className="contact-box"
                onChange={onChangeMessage}
                /> <br /><br />
                <input type="submit" value="Send" className="contact-btn" required/>
            </form>
            </div>
        </div>
              
       
       
       
      
       
        </div>
    );
}
export default ContactForm;
