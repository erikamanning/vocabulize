import React from "react"
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {

        return (
            <div className='Navigation'>
                <Link to="/deck">Deck</Link> |{' '}
                <Link to="/quiz">Quiz</Link>
              <Outlet />
            </div>
        )
    
}

export default Navigation;