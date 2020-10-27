import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


const SiteBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sitebarcontainer">
      <Card style={{ marginTop: '20px', marginBottom:'20px', padding: '20px', boxSizing: 'border-box' }} >
        <div className="cardheader">
          <span className="text-border">About Us</span>
        </div>
        <div className="profileimagecontainer">
          <img src={require('../../postImageContainer/author.png')} alt="profileimage" />
        </div>
        <div className="cardbody">
          <p className="personal"></p>  One thing I’ve learned looking back on how my style has evolved is how much I’ve started to gravitate towards neutrals....)
          </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardheader" >
          <span className="text-border">Social Network</span>
        </div>
        <div className="logo-social-network">
          <div className="logo-social-network-into">
            <NavLink to="#" className="link-logo-social-network"><img src={require('../../postImageContainer/social_network1.png')}></img></NavLink>
            <NavLink to="#" className="link-logo-social-network"><img src={require('../../postImageContainer/social_network2.png')}></img></NavLink>
            <NavLink to="#" className="link-logo-social-network"><img src={require('../../postImageContainer/social_network3.png')}></img></NavLink>
            <NavLink to="#" className="link-logo-social-network"><img src={require('../../postImageContainer/social_network4.png')}></img></NavLink>
            <NavLink to="#" className="link-logo-social-network"><img src={require('../../postImageContainer/social_network5.png')}></img></NavLink>
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>

        <div className="cardheader" >
          <span className="text-border">large banner</span>
        </div>
        <div className="recentposts-image">
          <img src={require(`../../postImageContainer/img23.jpg`)} />
        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardheader" >
          <span className="text-border" >Recent posts</span>
        </div>
        <div className="recentposts">
          {
            posts.map((item, index) => {
              return (
                <NavLink key={index} to={`/post/${item.id}`} className="link-recentposts">
                  <div className="recentposts-image">
                    <img src={require(`../../postImageContainer/${item.blogImage}`)} />
                  </div>
                  <div className="recentpost">
                    <h3>{item.blogTitle}</h3>
                    <h3><i className="far fa-calendar"></i> {item.postedOn}</h3>
                  </div>
                </NavLink>
              )
            })
          }

        </div>
      </Card>

 <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardheader" >
          <span className="text-border">category</span>
        </div>
       <div className='list-category'>
       <ul>
         <li><NavLink className="link-category" to="#">đà lạt</NavLink></li>
         <li><NavLink className="link-category" to="#">vũng tàu</NavLink></li>
         <li><NavLink className="link-category" to="#">quy nhơn</NavLink></li>
         <li><NavLink className="link-category" to="#">phú yên</NavLink></li>
         <li><NavLink className="link-category" to="#">ăn uống</NavLink></li>
         <li><NavLink className="link-category" to="#">check in</NavLink></li>
       </ul>
       </div>

      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box', }}>

        <div className="cardheader" >
          <span className="text-border">small banner</span>
        </div>
        <div className="small-banner">
          <div className="small-banner-into">
            <div className="small-banner-top">
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img15.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img18.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img19.jpg')} /></NavLink>
            </div>
            <div className="small-banner-bottom">
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img20.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img21.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img22.jpg')} /></NavLink>
            </div>
            <div className="small-banner-bottom">
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img23.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img24.jpg')} /></NavLink>
              <NavLink to="#" className="small-image"><img src={require('../../postImageContainer/img25.jpg')} /></NavLink>
            </div>
          </div>
        </div>
      </Card>


    </div>

  )
}

export default SiteBar;