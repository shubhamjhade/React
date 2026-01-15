import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
const [first, setfirst] = useState(0)
const [second, setsecond] = useState("")

const numprint = async()=>{
  try {
    const data = await axios.get('https://randomuser.me/api/')
    setsecond(data.data.results[0].name.first)
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
numprint()
},[first])
  return (
   <div className='main'>
    <div className="box">
      <p>{second}</p>
      <button className='btn' onClick={()=>{
        setfirst(first+1)
      }}>click</button>
      </div>
   </div>
  )
}

export default App
