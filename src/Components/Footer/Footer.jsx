import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/portfolioLogo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-topleft">\
                    <img id='footer-logo' src={footer_logo}></img>
                    <p>Frontend Developer</p>
                </div>
                <div className="footer-topright">
                    <div className="footer-emailinput">
                        <img src={user_icon}></img>
                        <input type='email' placeholder='Enter your email'></input>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2025 Nicholas Croulet. All rights reserved.</p>
                <div className='footer-bottom-right'>
                    <p>Connect with Me</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer