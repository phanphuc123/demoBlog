import React from 'react';
import './style.css';
import Card from '../UI/Card';
import { NavLink } from 'react-router-dom';
const PostHeader = () => {
  return (
    <div className="post-header">
    <div className="post-title">
      <NavLink to="#" className="post-title-link">Sedial eiusmod tempor</NavLink>
    </div>
    <div className="post-info">
      <div className="post-tag">
        <NavLink to="#" className="tags"> <i className="fas fa-tags"></i> Clothing, sunday moring  </NavLink>
        <NavLink to="#" className="tags"> / <i className="fas fa-user"></i> Jone snow</NavLink>
        <div className="tags"> /<i className="far fa-comments"></i>0</div>
      </div>

      <div className="post-category">
       <h3> <i className="far fa-calendar"></i> May 03, 2016</h3>
      </div>
    </div>
    <div className="post-text">
      Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt
      ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere.
      Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice
      vincam, sunt in culpa qui officia. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ...
    </div>
  </div>

  )
}
export default PostHeader;