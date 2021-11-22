import React from "react";
import { motion } from "framer-motion";
import '../Deck/Card/Card.css';


const Home = () => {
    return(
        <div style={{marginTop:'5rem'}}>
            <div className='Card'>               
                <div>
                    <h1 className='card-word home-card'>Welcome to Vocabulize</h1>
                    <p className='definition home-card'>The best place to study for visual learners</p>
                </div>
            
            </div>

        </div>
    )
}

export default Home;