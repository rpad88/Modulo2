import React from 'react'
import './btn.css'
import PropTypes from 'prop-types'

function Btn(props) {

  return (
    <div>
      <button>{props.txt}</button>
    </div>
  )
}

Btn.propTypes = {
  txt: PropTypes.string.isRequired,
  prop2: PropTypes.number.isRequired
}

export default Btn