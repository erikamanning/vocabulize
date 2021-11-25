import React from "react";
import sketch from '../../Assets/Process/process-sketch1.png'
import landingpage from '../../Assets/Process/landing-page.png'
import brandingsheet from '../../Assets/Process/Vocabulize branding sheet-01.png'
import brandingsheet3 from '../../Assets/Process/Vocabulize branding sheet-03.png'
import card from '../../Assets/Process/Vocab Card.png'
import './Process.css'
import { motion } from "framer-motion";

const ProcessComponent = () => {
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:1}}
            className='process-container'>
            <div className='process-row'>
                <img src={sketch}/>
                <p>We began this project by sketching out the UI and making a list of the various components needed to create this in react.</p>
            </div>
            <div className='process-row'>
                <p>The first task was to create brand guidelines to abide by, including typeface, and colors that will match our objective.</p>
                <img src={brandingsheet}/>
            </div>
            <div className='process-row'>
                <img src={brandingsheet3}/>
                <p>And to make design decisions that will enable a healthy learning environment.</p>
            </div>

            

            <div className='process-row'>
                <img src={landingpage}/>
                <p>The UI was then refined in Adobe XD.</p>
            </div>

            <h1 style={{marginBottom:'25vw', marginTop:'25vw'}}>And then it was time to get coding.</h1>

        </motion.div>
    )
}

export default ProcessComponent;