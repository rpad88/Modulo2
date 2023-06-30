import React from 'react'
import './banner.css'

export default function Banner({title, subTitle}) {

  return (
    <div className='container-fluid banner'>
        <div className='container'>
            <p className='text-normal'>{title}</p>
            <p className='text-big'>{subTitle}<span className='mostarda'>.</span></p>
        </div>
    </div>
  )
}
