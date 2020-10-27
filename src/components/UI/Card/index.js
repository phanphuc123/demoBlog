import React from 'react';
import './style.css';
const Card = (props) => {
  return (
   <div className="card" style={{width: '100%'}} {...props}>
    {props.children}
   </div>
  )
}
export default Card;