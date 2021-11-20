import React from "react"
import './CardBack.css'

const CardBack = () => {

    const drawing = true;

    return (
        <div>
            <h1>CardBack</h1>

            {
                drawing
                ? <div>
                    <h5>Your Drawing:</h5>
                    <img className='CardBack-drawing' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F10%2F09%2F228182-bunnies-animals-rabbits.jpg&f=1&nofb=1" alt="bunny" />
                  </div>
                : <p>No drawing yet!</p>
            }
            <div className='CardBack-button-container'>            
                {
                    drawing 
                    ? <button>Update</button>
                    : <button>AddDrawing</button>   
                }
            </div>
        </div>
    )

}

export default CardBack;