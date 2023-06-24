import React from 'react'
import './filter.css'

function Filter() {
  return (
    <div className='filter'>
      <p className='filter-by'>Filter by</p>
      <div className='filter-btns'>
        <button className='date'>Date: Last 90 days</button>
        <button>Type</button>
        <button>Status</button>
      </div>
    </div>
  )
}

export default Filter