import React from 'react'
import './search.css'
import PropType from 'prop-types'

function Search(props) {
  return (
    <div className='search'>
      <input type="text" name="search" id="" placeholder={props.placeholder} />
      <button type='submit'>Pesquisar</button>
    </div>
  )
}

Search.propType = {
  placeholder: PropType.string.isRequired
}

export default Search