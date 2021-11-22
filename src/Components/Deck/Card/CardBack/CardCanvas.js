import React, { useRef, useEffect, useState, useContext } from 'react';
import Paper from 'paper';
import paint from './DrawingTools/Paint';
import './CardCanvas.css';
import $ from 'jquery';
import { CardContext } from '../Card';
import { DeckContext } from '../../../App';


const CardCanvas = () => {
  
  const canvasRef = useRef(null);
  const defaultColor = "black";
  const [color, setColor] = useState(defaultColor);

  const card = useContext(CardContext);
  const {updateDrawing} = useContext(DeckContext);
  
  useEffect(() => {

    const canvas = canvasRef.current;
    Paper.setup(canvas);
    paint(color);
    if(card.drawing){

        const dataURL = card.drawing.toDataURL();
        const ctx = canvasRef.current.getContext('2d');
        var img = new Image;
        img.src = dataURL;
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        }
      }
  }, [color]);
  
  const handleChange = (evt) => {

    console.log(evt);
    setColor(evt.target.value)
  }

  const saveDrawing = () => {
    updateDrawing(card.id, canvasRef.current);
  }

  $(document).on('change', 'input[type=color]', function() {
    this.parentNode.style.backgroundColor = this.value;
  });
  
  return <div>
            <p className='definition'>Draw <b>{card.word}</b> in the area below</p>
            <button onClick={saveDrawing}>Save</button>
            <canvas className={'CardCanvas'} ref={canvasRef} id="canvas" resize="true" />
            <div className='color-picker-wrapper'>
                <input onChange={handleChange} value={color} type="color" />
            </div>
  </div>
}

export default CardCanvas;