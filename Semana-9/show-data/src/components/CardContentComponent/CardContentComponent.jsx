import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardContentComponent({user}) {
  return (
    <Card.Body className="p-2">
      <Card.Title className="mb-0">{user.name}</Card.Title>
      <Card.Text style={{ color: "#6c757d" }}>{user.profissao}</Card.Text>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.telefone}</Card.Text>
    </Card.Body>

    // <div className='col m-auto'>
    //     <h3 className='card-title'>{user.name}</h3>
    //     <p className='text-secondary'>{user.profissao}</p>
    //     <p className='card-text'>{user.email}</p>
    //     <p className='card-text'>{user.telefone}</p>
    // </div>
  );
}