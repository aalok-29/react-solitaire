import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='card-body'>
        <img src={props.img} style={{height:'300px',width:'390px'}} />
        <div className='card-title'><h1>{props.title}</h1></div>
        <div className='card-desc'>{props.desc}</div>
        <button className='btn btn-primary' style={{marginLeft:'100px',marginTop:'40px'}}>click here</button>
      </div>
    </div>
  )
}

export default Card
