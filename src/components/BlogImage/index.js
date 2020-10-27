import React from 'react';
import './style.css';
import Card from '../UI/Card';
import { NavLink } from 'react-router-dom';

const BlogImage = (props) => {
  return (
        <div className="blog-image-into"><img src={require("../../postImageContainer/img7.jpg")} /></div>
  )
}
export default BlogImage;