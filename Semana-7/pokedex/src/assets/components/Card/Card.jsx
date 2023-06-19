import React, { useState } from 'react'

export default function Card({user}) {
    const [likesCounter, setLikesCounter] = useState(0)

    const handleLikes = (e) => {
        e.preventDefault()
        setLikesCounter(likesCounter + 1)
    }

  return (
    <li className='card col'>
      <div className="card-body" key={user.nickname}>
        <p className="card-text">Nickname: {user.nickname}</p>
        <p className="card-text">Age: {user.age}</p>
        <p className="card-text">E-mail: {user.email}</p>
        <p className="card-text">Password: {user.senha}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div>
            <button onClick={handleLikes} className='btn btn-outline-primary'>👍</button>
            <span className='ms-2'>{likesCounter} likes</span>
        </div>
            <button className='btn btn-warning'>Editar</button>
      </div>
    </li>
  )
}
