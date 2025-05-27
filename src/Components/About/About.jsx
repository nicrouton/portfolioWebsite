import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/selfie.png'

const About = () => {
    return(
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me:</h1>
                <img src={theme_pattern}></img>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img id='selfie' src={profile_img}></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a senior student at Temple and I work full-time as a support technician for the city of Philadelphia where I investigate cybersecurity incidents.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width:"50%" }} /></div>
                        <div className='about-skill'><p>Javascript & React</p><hr style={{width:"70%"}} /></div>
                        <div className='about-skill'><p>C</p><hr style={{width:"60%"}} /></div>
                        <div className='about-skill'><p>Java</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <h1>Multiple JS, C, and Python Projects completed.</h1>
            </div>
        </div>
    )
}

export default About