import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const SocialShare = (props) =>{
  return (
<div className="social-share">
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/digg.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/facebook.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/google-plus.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/linkedin.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/tumblr.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/pinterest.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/reddit.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/stumble-upon.png')}/></NavLink>
 <NavLink to="#" className="link-social-share"><img src={require('../../postImageContainer/twitter.png')}/></NavLink>
</div>
  )
}
export default SocialShare;


