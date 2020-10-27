import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../../Logo';
import Navbar from '../Navbar';
const Hero = (props) => {
  return (
    <div>
      <Card style={{background:'#e9eaed'}}>
        <div style={{padding:'50px 0'}}>
        <Logo/>
        </div>
      </Card>
    </div>
  )
}
export default Hero;