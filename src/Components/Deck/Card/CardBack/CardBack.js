import React, {useState} from "react"
import { useContext } from "react/cjs/react.development";
import Card, { CardContext } from "../Card";
import './CardBack.css'
import CardCanvas from "./CardCanvas";

const CardBack = () => {

    const drawing = true;
    const [showCanvas, setShowCanvas] = useState(false);
    const card = useContext(CardContext);

    const accessCanvas = () => {
        setShowCanvas(sc=>!sc);
    }

    let dataURL = false;

    if(card.drawing){    
        dataURL = card.drawing.toDataURL();
    }

    return (
        <div>
            <h5 className='card-word'>{card.word}</h5>

            {
                drawing && !showCanvas
                ? <div>
                    {
                        dataURL 
                        ? <img className='CardBack-image' src={dataURL} alt="" />
                        : <p>No Image Yet</p>
                    }
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