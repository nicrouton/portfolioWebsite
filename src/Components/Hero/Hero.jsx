import React from 'react'
import './Hero.css'
import profile_img from '../../assets/selfie.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return(
        <div id='home' className='hero'>
            <img id='selfie-top' src={profile_img}></img>
            <h1> Welcome to my site! My name is <span>Nicholas Croulet</span> </h1>
            <p>
                I am a CS undergrad with experience in frontend web development, python, and java.
            </p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    Connect with me: 
                </div>
                <div className='hero-resume'><AnchorLink className='anchor-link' offset={50} href='#contact'>My resume:</AnchorLink>
                </div>
            </div>

        </div>
    )
}

export default Hero