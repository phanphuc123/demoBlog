import React from 'react';
import './style.css';
import Card from '../UI/Card';
import { NavLink } from 'react-router-dom';

const BlogImages = (props) => {
  return (
    <div className="blog-image-into1">
      <div className="image-top">
        <div className="image-top-left">
        <img src={require('../../postImageContainer/c1.jpg')}/>
        </div>
        <div className="image-top-center">
          <div className="image-top-center-top">  <img src={require('../../postImageContainer/c2.jpg')}></img></div>
          <div className="image-top-center-bottom">  <img src={require('../../postImageContainer/c3.jpg')}></img></div>
        </div>
        <div className="image-top-right">  <img src={require('../../postImageContainer/4.jpg')}></img></div>
      </div>
      <div className="image-bottom">
        <div className="image-buttom-left">  <img src={require('../../postImageContainer/c5.jpg')}></img></div>
        <div className="image-bottom-right">  <img src={require('../../postImageContainer/c6.jpg')}></img></div>
      </div>
    </div>
  )
}
export default BlogImages;