import React from 'react'
import gojo from '../../assets/images/gojo.jpeg'
import Data from '../../data/Data.jsx'
import './completed.css'

function Completed() {
  return (
    <div className='completed-wrapper'>
      <p className='completed'>Completed</p>
      <p className='week'>This week</p>
      {Data.map((item)=>(
        <div className='contents'>
          <div className='cont'>
            <img src={gojo} alt="user-image" className='gojo'  />
            <div>
              <p className='title'>Name.com Inc.</p>
              <p className='date-jum'>{item.date} . Automatic Payment</p>
            </div>
          </div>
          <p className='dollar'>- ${item.money}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Completed