import React from 'react'
import './Nav.css'
import { toast } from 'react-toastify'

function Navigation({nav,change,content,colo,funct}) {
  const mode =()=>toast.dark(`Dark Mode`)
  return (
   <header className={`navv ${nav}`}>
        <div className="logo">🛍️Shopa</div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <button className={`mode ${colo}`} onClick={change}  >{content}</button>
   </header>
  )
}

export default Navigation
