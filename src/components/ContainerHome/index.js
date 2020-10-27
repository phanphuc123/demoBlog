import React from "react";
import "./style.css";
import Card from "../UI/Card";
import { NavLink } from "react-router-dom";
import BlogImages from "../BlogImages";
import BlogImage from "../BlogImage";
import PostHeader from "../PostHeader";
import SocialShare from "../SocialShare";
import ReadMore from "../ReadMore";
const ContainerHome = (props) => {
  return (
    <Card
      style={{
        marginBottom: "20px",
        padding: "20px",
        boxSizing: "border-box",
        background: "#e9eaed",
      }}
    >
      <div className="container_bottom-left">
        <div className="blog-image">
          <BlogImages />
          <PostHeader />
          <ReadMore />
          <SocialShare />

          <BlogImage />
          <PostHeader />
          <ReadMore />
          <SocialShare />

          <BlogImage />
          <PostHeader />
          <ReadMore />
          <SocialShare />
        </div>
      </div>
    </Card>
  );
};
export default ContainerHome;
