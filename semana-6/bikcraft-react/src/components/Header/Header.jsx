import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header className='nav navbar'>
        <div className="container align-items-baseline pt-2">
            <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="logo bikcraft" />
            <ul className='d-flex justify-content-between'>
                <li><a href="#">Bicicletas</a></li>
                <li><a href="#">Seguros</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>
    </header>
  )
}
