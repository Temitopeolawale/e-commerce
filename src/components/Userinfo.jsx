import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faStar,faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'

import './Userinfo.css'

function Userinfo({name,username,email,phone,company}) {
  return (
    
    <div className='user'>
        <FontAwesomeIcon icon={faUser} />
      <h2>Name:{name}</h2>
      <small>{email}</small>
      <i>{username}</i>
      <p>phone:{phone}</p>
      <p>Works at :{company.name}</p>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStarHalfAlt}/>
      

    </div>
  )
}

export default Userinfo
