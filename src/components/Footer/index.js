import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="App">
      <div className="footer-about-us">
        <div className="name-item">about-us</div>
        <div className="text-about">
          Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi leo risus,
   porta ac consectetur ac, vestibulum at eross</div>
      </div>
      <div className="footer-category">
        <div className="name-item">tag cloud</div>
        <div className="item">
          <div className="item-1">
            <NavLink to="#" className="item-category">dà lạt</NavLink>
            <NavLink to="#" className="item-category">vũng tàu</NavLink>
          </div>
          <div className="item-1">
            <NavLink to="#" className="item-category">phú yên</NavLink>
            <NavLink to="#" className="item-category">quy nhơn</NavLink>
          </div>
          <div className="item-1">
            <NavLink to="#" className="item-category">ăn uống</NavLink>
            <NavLink to="#" className="item-category">check in</NavLink>
          </div>
          <div className="item-1">
            <NavLink to="#" className="item-category">vịnh hạ long</NavLink>
            <NavLink to="#" className="item-category">phú quốc</NavLink>
          </div>
        </div>
      </div>
      <div className="footer-recent-post">
        <div className="name-item">recent-posts</div>
        <div className="recent-post-item">
          <NavLink to="#" className="link-recent-post-item">Sem Porta Mollis Parturient</NavLink>
        </div>
        <div className="recent-post-item">
          <NavLink to="#" className="link-recent-post-item">Sem Porta Mollis Parturient</NavLink>
        </div>
        <div className="recent-post-item">
          <NavLink to="#" className="link-recent-post-item">Sem Porta Mollis Parturient</NavLink>
        </div>
        <div className="recent-post-item">
          <NavLink to="#" className="link-recent-post-item">Sem Porta Mollis Parturient</NavLink>
        </div>
        <div className="recent-post-item">
          <NavLink to="#" className="link-recent-post-item">Sem Porta Mollis Parturient</NavLink>
        </div>
      </div>
    </div>
  )


}
export default Footer;
