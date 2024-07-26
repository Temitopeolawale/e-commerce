import React, { useState } from 'react'
import Butt from './Butt'
import "./Card.css"

function Card({img,product_name,description,price}) {

    const[quantity,setQuantity]=useState(0)

    const addQuantity=()=>{
        setQuantity(quantity+1)
    }
    const remvQuantity=()=>{
        setQuantity(quantity-1)
    }
  return (
    <div>
       <div className={`cdd`}>
      <img src={img} alt="" />

      <h1>{product_name}</h1>
      <details>
        <summary>More info</summary>
        <p>{description}</p>
      </details>
      <p>{price}</p>
      <br />
      <>
      {quantity?<div className='qty' style={{display:'inline-flex',justifyContent:'space-around'}}><Butt text="+" func={addQuantity}/>{quantity}<Butt text="-"func={remvQuantity}/></div>:<Butt func={addQuantity}text="Add to Cart"/>}
      </>
      <br />
    </div>
    </div>
  )
}

export default Card
