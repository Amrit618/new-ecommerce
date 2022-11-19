import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

const links = ['Home', 'Products', 'Profile', 'Cart']
    
  return (
     <div className='navbar'>
        {
            links.map(link => (
                <Link className='link' key = {link}to={link}>{link}</Link>
            ))
        }
    </div>
  )
}

export default Navbar