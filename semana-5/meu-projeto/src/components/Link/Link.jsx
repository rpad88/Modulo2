import React from 'react'
import './link.css'
import PropTypes from 'prop-types'

function Link(props) {

  return (
    <div>
      <a target={props.target} href={props.href}>{props.txt}</a>
    </div>
  )
}

Link.propTypes = {
  txt: PropTypes.string.isRequired,
  target: PropTypes.string,
  href: PropTypes.string.isRequired
}

export default Link