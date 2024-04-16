import React from 'react'
import DashBoardNavbar from './dh_navbar'

function Dashboard_Header() {
  return (
    <>
    <div className='header_bar'>
        <div className='logo'>
            <i className="ri-pages-line"></i>
            <span>Pro Builder</span>
            </div>
            <DashBoardNavbar/>
    </div>
    </>
  )
}

export default Dashboard_Header