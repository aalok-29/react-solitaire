import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
// import Image9 from '../images/1.jpg'
function About(){

  const [hello, sethello]= useState('hello students, how are u');
  function roop(){
sethello('this is our react class')
  }
    return(
<>
<Navbar/>
<h1>welcome to about page</h1>
<h1>{hello}</h1>
<button onClick={roop}>click here</button>
{/* <div className="bb">hfbwkjf</div> */}
{/* <img src={Image9} /> */}
</>
    )
}
export default About;
