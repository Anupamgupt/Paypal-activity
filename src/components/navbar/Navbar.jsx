import React from 'react'
import paypal from '../../assets/images/paypal.png'
import {IoMdNotifications} from "react-icons/io"
import {RiSettings5Fill} from "react-icons/ri"
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left-nav'>
          <img src={paypal} className='paypal-img' alt='paypal'/>
          <p>Home</p>
          <p>Finances</p>
          <p>Send and Request</p>
          <p>Deals</p>
          <p>Wallet</p>
          <p className='activity-nav'>Activity</p>
          <p>Help</p>
        </div>
        <div className='right-nav'>
          <IoMdNotifications className='noti'/>
          <RiSettings5Fill className='setting'/>
          <p>LOG OUT</p>
        </div>
    </div>
  )
}

export default Navbar