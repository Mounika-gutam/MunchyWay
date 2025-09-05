import { Component } from "react";
import Navbar from "../NavBar/NavBar";
import "./ContactPage.css";


class ContactPage extends Component{
    render(){
        return(
            <div className="contact-page-main-bg-container">
                <Navbar />
                <div className="contact-banner-img">
                    <h1 className="contact-banner-heading">Contact Us</h1>
                </div>

                <div>
                    <h2 className="contact-form-heading">HAVE ANY QUESTIONS?</h2>
                    <p className="contact-form-para">Want to know about any of our ingredients or suppliers? Or just want to say anything? send us a message below and we'll get right back to you...  </p>

                    <form className="contact-form-container">
                        <div className="contact-form-inputs">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input id="email" type="email" className="contact-input" placeholder="Enter your email" required/>
                        </div>
                        <div className="contact-form-inputs">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input id='name' type="text" className="contact-input" placeholder="Enter your name" required/>
                        </div>
                        <div className="contact-form-inputs">
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea id="message" className="contact-input-textarea" placeholder="Enter your message" required/>
                        </div>

                        <button className="contact-form-btn">SUBMIT</button>
                    </form>
                </div>

                {/* Open Timings */}

                <div className="contact-open-timings-container">
                    <h2 className="contact-open-heading">WE ARE OPEN</h2>
                    <p className="contact-open-para">We bring you the flavor of the ocean, but located in the heart of downtown. <b>Delivery within 20 km in any derection...</b></p>

                    <div>
                        <p className="contact-open-timings">Mon - Wed 9: 00 am - 5: 00 pm</p>
                        <p className="contact-open-timings">Thu - Fri 9: 00 am - 8: 30 pm</p>
                        <p className="contact-open-timings">Saturday 9: 00 am - 10: 00 pm</p>
                        <p className="contact-open-timings">Sunday Closed</p>
                    </div>
                
                </div>

                {/* Contact Information */}

                <div>
                    <h2 className="contact-info-heading">CONTACTS</h2>
                    <img className="contact-info-img" src="https://i.ibb.co/LzTRD8JR/775260464661ad6c17889c4a670ae0c1-removebg-preview.png" alt="image" />
                    <p className="contact-info-para">Use our contact form all information requests or contact us directly using the contact information below...</p>
                </div>



            </div>
        )
    }
}

export default ContactPage;
