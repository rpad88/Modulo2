import React from 'react'

export default function CardContentComponent({user}) {
  return (
    <div className='col m-auto'>
        <h3 className='card-title'>{user.name}</h3>
        <p className='text-secondary'>{user.profissao}</p>
        <p className='card-text'>{user.email}</p>
        <p className='card-text'>{user.telefone}</p>
    </div>
  )
}