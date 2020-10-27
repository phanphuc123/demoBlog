import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SiteBar from '../../components/SiteBar';
import Card from '../../components/UI/Card';
import { NavLink } from 'react-router-dom';


const Post = (props) => {
  return (
    <div className="container">
      <section className="container-top">
        <BlogPost {...props} />
        <SiteBar />
      </section>

        <div className="also-like">
          <div className="title-also-like">
            you may also like
          </div>
          <div className="container-also-like">
          <NavLink to="#" className="container-image">
              <div className="also-like-image">
                <img src={require('../../postImageContainer/image2.jpg')} />
              </div>
              <div className="title-image">
                <div className="name-image">Nullam Lorem Mattis Purus</div>
                <div className="time-image"><i className="far fa-calendar"></i> 21 Mar 2014</div>
              </div>
            </NavLink>

             <NavLink to="#" className="container-image">
              <div className="also-like-image">
                <img src={require('../../postImageContainer/image3.png')} />
              </div>
              <div className="title-image">
                <div className="name-image">Nullam Lorem Mattis Purus</div>
                <div className="time-image"><i className="far fa-calendar"></i> 21 Mar 2014</div>
              </div>
            </NavLink>

          </div>

            <div className="container-also-like">
          <NavLink to="#" className="container-image">
              <div className="also-like-image">
                <img src={require('../../postImageContainer/img4.jpg')} />
              </div>
              <div className="title-image">
                <div className="name-image">Nullam Lorem Mattis Purus</div>
                <div className="time-image"><i className="far fa-calendar"></i> 21 Mar 2014</div>
              </div>
            </NavLink>

             <NavLink to="#" className="container-image">
              <div className="also-like-image">
                <img src={require('../../postImageContainer/img7.jpg')} />
              </div>
              <div className="title-image">
                <div className="name-image">Nullam Lorem Mattis Purus</div>
                <div className="time-image"><i className="far fa-calendar"></i> 21 Mar 2014</div>
              </div>
            </NavLink>

          </div>
          <div className="about-post-author">
          <div className="title-about-post-author">
             about post author
          </div>
          <div className="container-author">
           <div className="image-author">
              <img src={require('../../postImageContainer/author.png')} />
           </div>
            <div className="author">
            <NavLink to="#" className="name-author">John Snow</NavLink>
            <div className="introduce-author">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
            </div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Post;