import React, { useRef, useEffect, useContext } from 'react';
import Paper from 'paper';
import paint from './DrawingTools/Paint';
import './CardCanvas.css';
import $ from 'jquery';
import { CardContext } from '../Card';
import { DeckContext } from '../../../App';


const CardCanvas = () => {
  
  const canvasRef = useRef(null);

  const card = useContext(CardContext);
  const {updateDrawing} = useContext(DeckContext);
  
  useEffect(() => {

    const canvas = canvasRef.current;
    Paper.setup(canvas);
    paint();
    if(card.drawing){

      // Create a raster item using the image tag with id='mona'
      const dataURL = card.drawing.toDataURL();
      var raster = new Paper.Raster(dataURL);

      // Move the raster to the center of the view
      raster.position = Paper.view.center;
      raster.size = Paper.view.viewSize;
      raster.position = Paper.view.center;

      }
  }, [card.drawing]);
  

  const saveDrawing = () => {
    updateDrawing(card.number, canvasRef.current);
  }

  $(document).on('change', 'input[type=color]', function() {
    this.parentNode.style.backgroundColor = this.value;
  });
  
  return <div>
            <p className='definition'>Draw <b>{card.word}</b> in the area below:</p>

            <canvas className={'CardCanvas'} ref={canvasRef} id="canvas" resize="true" />
            <div className='edit-card-buttons'>
              <button onClick={saveDrawing}>Save</button>
              <button onClick={()=>(Paper.project.clear())}>Clear Drawing</button>
            </div>
  </div>
}

export default CardCanvas;