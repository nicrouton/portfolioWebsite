import React from 'react'
import './Hero.css'
import profile_img from '../../assets/selfie.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return(
        <div id='home' className='hero'>
            <img id='selfie-top' src={profile_img}></img>
            <h1>I am <span>Nicholas Croulet</span>, a Computer Science student at Temple.</h1>
            <p>
                I have experience with frontend development, python, github, agile, and cybersecurity.
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