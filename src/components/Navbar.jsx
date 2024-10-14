import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between px-10'>
        <Link to={'/'}><h1 className='text-3xl p-1'>Logo</h1></Link>
        <div className='flex gap-5 text-xl'>
          <Link to={'/'} className='text-3xl'>Home</Link >
          <Link to={'/cart'} className='text-3xl'>Cart</Link >
        </div>
      </nav>
    </>
  )
}

export default Navbar