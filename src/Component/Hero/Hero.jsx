import React from 'react'
import "./Hero.css"
import drawing from '../../assets/drawing.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div  className='hero-container'>
      <img src="src/assets/drawing.jpg" alt=""  className='hero-img' />
    <div class="content">
      
            <h1>DESIGN YOUR HOUSE</h1>
            <p>Subscribe Easy tutorials youtube channel to watch more videos,<br /> press the bell icon to get latest update.</p>
            <div>
               <Link to="/Watchmore"><button type="button"><span></span>WATCH MORE</button></Link> 
                <Link to="/Subscribe"><button type="button"><span></span>SUBSCRIBE</button></Link>
            </div>
            </div>
            </div>
        
  );
};

export default Hero
