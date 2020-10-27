import React, { useState, useEffect } from "react";
import "./style.css";
import SiteBar from "../../components/SiteBar";
import ImageEffect from "../../components/ImageEffect";

import ContainerHome from "../../components/ContainerHome";

const Home = (props) => {
  return (
    <div className="home_contanier">
      <div className="container_top_border">
        <ImageEffect />
      </div>
      <div className="container_bottom_border">
        <div className="container_home">
          <ContainerHome />
        </div>
        <SiteBar />
      </div>
    </div>
  );
};
export default Home;
