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

      // Create a raster item using the image tag with id='mona'
      const dataURL = card.drawing.toDataURL();
      var raster = new Paper.Raster(dataURL);

      // Move the raster to the center of the view
      raster.position = Paper.view.center;
      raster.size = Paper.view.viewSize;
      raster.position = Paper.view.center;

      }
  }, [color]);
  
  const handleChange = (evt) => {

    setColor(evt.target.value)
  }

  const saveDrawing = () => {
    updateDrawing(card.number, canvasRef.current);
  }

  $(document).on('change', 'input[type=color]', function() {
    this.parentNode.style.backgroundColor = this.value;
  });
  
  return <div>
            <p className='definition'>Draw <b>{card.word}</b> in the area below</p>
            <div className='color-picker-wrapper'>
              <input onChange={handleChange} value={color} type="color" />
            </div>

            <canvas className={'CardCanvas'} ref={canvasRef} id="canvas" resize="true" />
            <button  className='save' onClick={saveDrawing}>Save</button>
  </div>
}

export default CardCanvas;