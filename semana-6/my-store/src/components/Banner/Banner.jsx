import React, { useContext } from 'react'
import './banner.css'
import { BannerContext } from '../../context/Context'

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
