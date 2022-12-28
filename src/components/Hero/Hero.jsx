import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;


  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            {/* the best ad animation  */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "178px":"238px"}}
                whileInView={{left: '8px'}}
                transition={{...transition, type:'tween'}}
                >
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* hero heading  */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here We will help You to Shape and Build Your Ideal Body and Live Up Your Life to fullest</span>
                </div>
            </div>
            {/* numbers or figures  */}
            <div className="figures">
                <div>
                    <span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span><NumberCounter end={958} start={850} delay="4" preFix="+"/></span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span><NumberCounter end={15} start={8} delay="4" preFix="+"/></span>
                    <span>Fitness Programs</span>
                </div>
            </div>


            {/* hero buttons  */}
            <div className="hero-buttons">
                <buttons className=" btn">Get Started</buttons>
                <buttons className=" btn">Learn More</buttons>
            </div>

        </div>

        {/* right side  */}
        <div className="right-h">
            <button className="btn">Join Now</button>

            {/* heart rate  */}
            <motion.div
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 Bpm</span>
            </motion.div>
            
            {/* hero image  */}
            <img src={hero_image} className="hero-image" alt="" />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={hero_image_back} className="hero-image-back" alt="" />

            {/* calories  */}
            <motion.div
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero