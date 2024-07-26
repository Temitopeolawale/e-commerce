import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Userinfo from './Userinfo'

function User() {
    const [user,setUser]=useState(null)


    const fetchData = async()=>{
        const response = await axios.get('https://api.themoviedb.org/3/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTkwZjg2Mjc3MGRhZDljM2E0MzgxYzA4NjAzN2VjNCIsInN1YiI6IjY2NTAzZTk3ZmFiZmE2ZTQzYjA2OTNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y6da2YdLzHIcud2lKtqdf_ZpHz8R28SfIY7TXaTp-jg')
        console.log(response.data)
        setUser(response.data)
    }
    useEffect(
        ()=>{
        fetchData()
        },
        []
    )
  return (
    <>
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"40px",
        padding:"40px"
    }}>
    {user&&user.map(u=><Userinfo key={u.id}{...u}/>)}
    </div>
    </>
  )
}

export default User
