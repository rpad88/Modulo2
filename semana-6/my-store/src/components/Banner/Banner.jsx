import React from 'react'
import './banner.css'

export default function Banner(props) {
  return (
    <div className='container-fluid banner'>
        <div className='container'>
            <p className='text-normal'>{props.txt1}</p>
            <p className='text-big'>{props.txt2}<span className='mostarda'>.</span></p>
        </div>
    </div>
  )
}
