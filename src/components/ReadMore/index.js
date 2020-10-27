import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const ReadMore = (props) =>{
  return (
    <p className="readmore-border">
    <NavLink to="#" className="read-more">Read More</NavLink>
  </p>
  )
}
export default ReadMore;