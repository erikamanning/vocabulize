import React from "react";
import sketch from '../../Assets/Process/process-sketch1.png'
import landingpage from '../../Assets/Process/landing-page.png'
import brandingsheet from '../../Assets/Process/Vocabulize branding sheet-01.png'
import brandingsheet3 from '../../Assets/Process/Vocabulize branding sheet-03.png'
import randomwordsapi from '../../Assets/Process/random-words-api.png'
import paperjsimg from '../../Assets/Process/PaperJS.jpg'
import './Process.css'
import { motion } from "framer-motion";

const ProcessComponent = () => {
    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:1}}
            className='process-container'>
            <h1>Design</h1>
            <div className='process-row'>
                <img src={sketch} alt='sketch'/>
                <p>We began this project by sketching out the UI and making a list of the various components needed to create this in react.</p>
            </div>
            <div className='process-row'>
                <p>The first task was to create brand guidelines to abide by, including typeface, and colors that will match our objective.</p>
                <img src={brandingsheet} alt='brand-guidelines'/>
            </div>
            <div className='process-row'>
                <img src={brandingsheet3} alt='design-decisions'/>
                <p>And to make design decisions that will enable a healthy learning environment.</p>
            </div>

            <div className='process-row'>
                <img src={landingpage} alt='adobe-xd'/>
                <p>The UI was then refined in Adobe XD.</p>
            </div>

            <h1 style={{marginBottom:'25vw', marginTop:'25vw'}}>And then it was time to get coding.</h1>
            <h1>Development</h1>
            <div className='process-row'>
                <p>We used the <a href="https://github.com/mcnaveen/Random-Words-API">Random-Words-API</a> for this project. 
                   It grabs a random word along with its definition.
                </p>
                <img src={randomwordsapi} alt='random-words-api'/>
            </div>

            <div>
                <p> The first step was to create a class to interface with this 
                    API and grab the data to be used in our application.
                </p>
                <p> Then it was time to write the application state. 
                    The main application state was the deck of cards 
                    created with the data from the Random-Words-API, 
                    and combined with user drawings that are created 
                    for the cards.
                </p>
            </div>
            <div className='process-row'>
                <img src={paperjsimg} alt='paper-js'/>
                <p> We used <a href="http://paperjs.org/">Paper JS</a> to create a canvas and tools for users to 
                    draw images that would help them remember each vocabulary word.
                </p>
            </div>

            <div>
                <p> We have made this app to be a front end app, 
                    built it was built with the future in mind. 
                    We plan to add a backend to this application, 
                    and add more features such as user accounts so 
                    that users can save decks. We also plan to add more 
                    tools to the drawing area so users can get even more 
                    custom with their drawings.
                </p>
            
            </div>

            
            
            
        </motion.div>
    )
}

export default ProcessComponent;