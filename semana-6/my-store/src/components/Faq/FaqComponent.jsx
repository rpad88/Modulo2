import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import "./faqComponent.css"

export default function FaqComponent() {
  return (
    <section className='container m-5'>
      <div className="input-group gap-1 mb-3">
        <input type="text" placeholder='Descreva brevemente sua dúvida' name="searchFaq" id="searchFaq" className="form-control p-2 focus-ring focus-ring-warning"/>
        <button className='btn btn-warning text-white'><SearchIcon className='icon'/></button>
      </div>

      <div className="card mb-2">
        <details className='p-2'>
          <summary className='border-bottom mb-2 p-2'>1. Lorem, ipsum dolor.</summary>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit neque voluptas et itaque accusamus hic consectetur architecto maxime quod!</p>
        </details>
      </div>

      <div className="card mb-2">
        <details className='p-2'>
          <summary className='border-bottom mb-2 p-2'>2. Lorem, ipsum.</summary>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit neque voluptas et itaque accusamus hic consectetur architecto maxime quod!</p>
        </details>
      </div>
      <div className="card mb-2">
        <details className='p-2'>
          <summary className='border-bottom mb-2 p-2'>3. Lorem ipsum dolor sit amet.</summary>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit neque voluptas et itaque accusamus hic consectetur architecto maxime quod!</p>
        </details>
      </div>
      <div className="card mb-2">
        <details className='p-2'>
          <summary className='border-bottom mb-2 p-2'>4. Lorem, ipsum dolor sit.</summary>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit neque voluptas et itaque accusamus hic consectetur architecto maxime quod!</p>
        </details>
      </div>
      
    </section>
  )
}
