
import React from 'react';
import {  BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import Deck from './Deck/Deck';
import Quiz from './Quiz/Quiz';
import App from './App';



const RouterComponent = () => {
    const location = useLocation();
    return(
        <Router>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="slide" timeout={2000}>
                    <Routes>
                        <Route path="/" element={<App />} >
                        <Route path="/deck" element={<Deck />}/>
                        <Route path="/quiz" element={<Quiz />}/>
                      </Route>      
                    </Routes>  
                </CSSTransition>
            </TransitionGroup>
        </Router>
    )
}

export default RouterComponent;