import React from 'react'
import './header.css'
import MenuComponent from '../MenuComponent/MenuComponent'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className='nav navbar bg-black justify-content-between'>
        <div className="container align-items-center">
            <Link to={'/'} className='mostarda fs-3 text-decoration-none'>My Store</Link>
            {/* <h3 className='mostarda' onClick={<Link to={'/'}/>}>My Store</h3>    */}
            <nav className='d-flex justify-content-around'>
            <MenuComponent />
            </nav>
        </div>
    </header>
  )
}