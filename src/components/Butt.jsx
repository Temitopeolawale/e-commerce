import React from 'react'

function Butt({func,text}) {
  return (
    <div>
       <button style={{
        padding:"1rem",
        backgroundColor: 'rgb(105, 97, 71)',
        border: 'none',
        borderRadius: '20px',
        marginTop: '10px',
        color:"white"
       }} onClick={func}>{text}</button> 
    </div>
  )
}

export default Butt
