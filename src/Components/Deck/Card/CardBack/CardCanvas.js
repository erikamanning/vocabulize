import React, { useRef, useEffect, useState } from 'react';
import Paper from 'paper';
import paint from './DrawingTools/Paint';
import './CardCanvas.css';
import $ from 'jquery';


const CardCanvas = () => {
  
  const canvasRef = useRef(null);
  const defaultColor = "black";
  const [color, setColor] = useState(defaultColor);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    paint(color);
  }, [color]);
  
  const handleChange = (evt) => {

    console.log(evt);
    setColor(evt.target.value)
  }
  
  $(document).on('change', 'input[type=color]', function() {
    this.parentNode.style.backgroundColor = this.value;
  });
  
  return <div>
            <p className='definition'>Draw (card word) the area below</p>
            <canvas className={'CardCanvas'} ref={canvasRef}  id="canvas" resize="true" />
            <div className='color-picker-wrapper'>
                <input onChange={handleChange} value={color} type="color" />
            </div>
  </div>
}

export default CardCanvas;