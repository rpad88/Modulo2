import React from 'react'
import PropTypes from 'prop-types'
import './informacoesPessoa.css'

export default function InformacoesPessoa(props) {
  return (
    <div className='container alert alert-primary' role='alert'>
            <h1>Olá, sou o {props.nome}, tenho {props.idade} anos e gosto de {props.hobbies}</h1>
    </div>
  )
}

InformacoesPessoa.propTypes = {
    nome: PropTypes.string.isRequired,
    idade:PropTypes.number.isRequired,
    hobbies: PropTypes.string
}