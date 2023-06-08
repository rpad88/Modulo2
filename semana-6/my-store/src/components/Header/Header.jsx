import React from 'react'
import './header.css'

export default function Header() {

    const navList = [
        {
            label: 'Produtos',
            route: '/produtos'
        },
        {
            label: 'Contato',
            route: '/contato'
        }
    ]

    const link = navList.map(link => {
        return (<li className='nav-item'><a href={link.route}>{link.label}</a></li>)
    })

  return (
    <header className='nav navbar bg-black justify-content-between'>
        <div className="container align-items-center">
            <h3 className='mostarda'>My Store</h3>   
            <nav className='d-flex justify-content-around'>
                {navList && link}
            </nav>
        </div>
    </header>
  )
}