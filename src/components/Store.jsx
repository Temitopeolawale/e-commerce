import React from 'react'
import data from '../data/data.json'
import Card from './Card'
import './Store.css'
function Store() {
  return (
    <div className='Store'>
        {
          data.map(i=>(<Card key={i.id} {...i}/>))
        }
      </div>
  )
}

export default Store
