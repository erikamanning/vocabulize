import React from "react"
import { Outlet, Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

        return (
            <div className='Navigation-container'>
                <div className="Navigation-links">
                  <Link to="/deck">Deck</Link> {' '}
                  <Link to="/quiz">Quiz</Link>
                </div>
              <Outlet />
            </div>
        )
    
}

export default Navigation;