import React,{useState} from 'react'
import'./Hero.css'
import Butt from './Butt'
import { toast } from 'react-toastify'
function Hero() {
  const notify=()=>toast.success(' welcome to 🛍️shopa', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
  return (
    
    <>
    <div className='Hero' style={{backgroundImage:"URL('/asset/pexels-solliefoto-298863.jpg')"}}>
      <div className='welcome'>{/* <button className='btn'>Shop Here</button> */}
        <h1>Welcome to Shopa</h1>
        <p>Be the most stylish with our product,we always, give the best for the product we produce</p>
        <Butt text="Shop Here" func={notify}/>
      </div>
    </div>
    </>
  )
}

export default Hero
