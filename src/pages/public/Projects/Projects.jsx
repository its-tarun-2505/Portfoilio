import React from 'react'
import { Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects-page'>
        <Outlet />
    </div>
  )
}

export default Projects
