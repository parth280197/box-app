import React from 'react';
import './Box.css';


export default function Box(props) {
  let boxes = props.boxes.boxes;
  return (
    boxes.map((box , index) =>
      (<div style={props.boxStyle} className='addedBox animated swing ' key={index} onClick={() => props.removeBox(index)}>
          {box}
      </div>)
    )
  )
}