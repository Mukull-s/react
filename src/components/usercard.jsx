import React from 'react'
import Mukulpic from '../assets/Mukul.jpg'
import './usercard.css'


const usercard = () => {
  return (
    <div className = 'container'>
        <p id ='name' >Mukul Singhal</p>
        <img id='user-img' src={Mukulpic} alt= "Mukul Singhal img" ></img>
        <p id='desc'> This is my Description</p>
    </div>
  )
}

export default usercard