import React from 'react'

export default function Card({user}) {
  return (
    <div className='card col'>
      <div className="card-body">
        <p className="card-text">Nickname: {user.nickname}</p>
        <p className="card-text">Age: {user.age}</p>
        <p className="card-text">E-mail: {user.email}</p>
        <p className="card-text">Password: {user.senha}</p>
      </div>
    </div>
  )
}
