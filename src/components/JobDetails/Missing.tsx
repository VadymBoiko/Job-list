import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='flex justify-center items-center h-[100vh]'>
        <h2>Post Not Found</h2>
        <p>Well, that's disappointing.</p>
        <p><Link to='/'>Vising Our Job List</Link></p>
    </main>
  )
}

export default Missing