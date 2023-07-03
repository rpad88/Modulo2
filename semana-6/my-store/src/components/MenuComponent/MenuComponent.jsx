import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuComponent() {
  return (
    <>
      <li className='nav-item'><Link to={'/contato'}>Contato</Link></li>
      <li className='nav-item'><Link to={'/produtos'}>Produtos</Link></li>
      <li className='nav-item'><Link to={'/faq'}>FAQ</Link></li>
    </>
  )
}
