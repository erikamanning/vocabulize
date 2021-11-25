import React, {useState, useContext} from "react"
import { CardContext } from "../Card";
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
        <div className='card-container-deck'>
            <div>
                <h5 className='card-word'>{card.word}</h5>
                {
                    drawing && !showCanvas
                    ? <div>
                        {
                            dataURL 
                            ? <img className='CardBack-image' src={dataURL} alt="" />
                            : <p style={{"color": "black","fontSize": '15pt','fontStyle': 'italic'}}>No Image Yet</p>
                        }
                    </div>
                    : <CardCanvas/>
                }
            </div>
            {
                !showCanvas
                ?
                <div className='CardBack-button-container'>   
                    <button className='update' onClick={accessCanvas}>   
                        {
                            drawing
                            ? 'Update'
                            : 'AddDrawing'
                        }
                    </button>
                </div>
                :null
            }

        </div>
    )

}

export default CardBack;