import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

const BlogPost = (props) => {
  let dem = 0;
  const [post, setPost] = useState({
    blogCategory: "Featured",
    blogTitle: "Fitness Mantra To Live Fit Life",
    slug: "fitness-mantra-to-live-fit-life",
    postedOn: "July 21, 2016",
    author: "Faiz Khan",
    blogImage: "image1.jpg",
    blogText: "Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is."
  });
  const [postId, setPostId] = useState('');
  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPostId(postId);
    setPost(post);
  }, [post, props.match.params.postId]);


  return (

    <div className="blogpostcontainer">
      <Card style={{ }}>
        <div className="blogheader">
          <span className="postcategory">{post.blogCategory}</span>
          <h1 className="posttitle" >{post.blogTitle}</h1>
          <span className="postedby">{post.postedOn} by {post.author}</span>
        </div>
        <div className="postimagecontainer">
          <img src={require(`../../postImageContainer/${post.blogImage}`)} alt="postImage" />
        </div>
        <div className="postcontent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>

        <div className="postimagecontainer">
          <img src={require(`../../postImageContainer/${post.blogImage}`)} alt="postImage" />
        </div>
        <div className="postcontent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>

        <div className="postimagecontainer">
          <img src={require(`../../postImageContainer/${post.blogImage}`)} alt="postImage" />
        </div>
        <div className="postcontent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>

      </Card>

    </div>

  )
}

export default BlogPost;