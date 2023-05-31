import React from 'react'
import './header.css'
import Btn from '../btn'

export default function Header() {
  return (
    <div className='bg-blue flex'>
      <Btn txt="Gmail"/>
      <Btn txt="Drive"/>
      <img src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000" width={28} alt="avatar" />
    </div>
  )
}
