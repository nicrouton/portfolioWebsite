import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "19244e3b-2b5a-449f-bcfd-983077fad97a");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert('Form Submitted Successfully.');
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return(
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Contact me</h1>
                    <p>I'm available for new projects.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} /> <p>ncroulet@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} /> <p>PA, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type='text' placeholder='Enter your name here' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label htmlfor="">Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact