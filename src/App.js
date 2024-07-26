import './App.css';
import Navigation from './components/Navigation';
import { useState } from 'react';
import Hero from './components/Hero.jsx 14-33-41-583';
import Store from './components/Store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import User from './components/User';
function App() {
  
  const [light,setLight,mdd]=useState(true)
  const toggleMode=()=>{
    setLight(!light)

    if(light){
      const fs =()=>toast.success('Dark mode')
      fs()
    }
    else{
      const fs =()=>toast.success('Light mode')
      fs()
    }
  }
  
  return (
    <>
    <ToastContainer/>
    <Navigation nav={light?'navlight':'navdark'} change={toggleMode} content={light?'🌞':"🌙"} colo={light?'modelight':'modedark'} />
    <Hero/>
    <Store/>
    <User/>
    </>
  );
}

export default App;
