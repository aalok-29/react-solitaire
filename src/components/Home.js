import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <h1 style={{color:'red',textAlign:'center'}}>home</h1>
      <h2 style={{color:'Green',textAlign:'center'}}>This is home page </h2> */}
      <Card img='https://images.unsplash.com/photo-1519819286236-0b3c6506e475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80' title='This is a card' desc='lorem ' />
      <Card img='https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_1280.jpg' title='This is a card' desc='lorem' />
      <Card img='https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_1280.jpg' title='This is a card' desc='lorem ' />
    <Card img='https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_1280.jpg' title='This is a card' desc='lorem ' />
    </div>
  )
}

export default Home
