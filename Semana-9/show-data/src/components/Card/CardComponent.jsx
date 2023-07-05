import React from 'react'
import './cardComponent.css'
import { Card, CardImg } from 'react-bootstrap';

export default function CardComponent({avatar, neto}) {
  return (

    <Card style={{flexDirection: "row"}} className='mt-5'>
        <CardImg variant='initial' src={avatar} fluid className='rounded-start' />
        {neto}
    </Card>
  )
}
