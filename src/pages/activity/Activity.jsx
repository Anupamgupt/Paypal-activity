import React from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter'
import Completed from '../../components/completed/Completed'
import './activity.css'

function Activity() {
  return (
    <div className='activity'>
        <Search/>
        <Filter/>
        <Completed/>
    </div>
  )
}

export default Activity