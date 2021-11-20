import React, { useRef, useEffect, useState } from 'react';
import Paper from 'paper';
import paint from './DrawingTools/Paint';
import './CardCanvas.css'

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

  return <div>
            <div>
                <input onChange={handleChange} value={color} type="color" />
            </div>
            <canvas className={'CardCanvas'} ref={canvasRef}  id="canvas" resize="true" />
  </div>
}

export default CardCanvas;