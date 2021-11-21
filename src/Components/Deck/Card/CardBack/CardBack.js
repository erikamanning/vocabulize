import React, {useState} from "react"
import './CardBack.css'
import CardCanvas from "./CardCanvas";

const CardBack = () => {

    const drawing = true;
    const [showCanvas, setShowCanvas] = useState(false);


    const accessCanvas = () => {
        console.log('clicked!')
        setShowCanvas(sc=>!sc);
    }

    return (
        <div>
            {
                drawing && !showCanvas
                ? <div>
                    <h5 className='card-word'>(cardword)</h5>
                    <img className='CardBack-drawing' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F10%2F09%2F228182-bunnies-animals-rabbits.jpg&f=1&nofb=1" alt="bunny" />
                  </div>
                : <CardCanvas/>
            }
            <div className='CardBack-button-container'>   
                <button onClick={accessCanvas}>   
                    {
                        drawing 
                        ? 'Update'
                        : 'AddDrawing'
                    }
                </button>
            </div>
        </div>
    )

}

export default CardBack;