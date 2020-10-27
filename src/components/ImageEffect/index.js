import React, {useState,useEffect} from 'react';
import './style.css';
let dem = 0;

const ImageEffect = () =>{
  const images = ['img4.jpg', 'img5.png', 'img7.jpg','img15.jpg'];
  const [image,setImages] = useState(images[0]);
  const chage_right = () =>{
    if(dem <= 2){
      dem++;
      setImages(images[dem]);
    }
  }
  const chage_left = () =>{
    if(dem >= 1){

      dem--;
      setImages(images[dem]);

    }
  }
  return (
    <div className="imageeffect_container">
       <div className="image_container">
       <img src={require('../../postImageContainer/' + image)}></img>
       <div className="icon_right" onClick={chage_right}><i className="fas fa-chevron-right"></i></div>
       <div className="icon_left" onClick={chage_left}><i className="fas fa-chevron-left"></i></div>
       </div>
    </div>
  )
}

export default ImageEffect;