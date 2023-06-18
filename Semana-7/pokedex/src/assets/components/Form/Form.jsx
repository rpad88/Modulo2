import React from 'react'
import Input from './Input'

function printInputValues() {
	// e.preventDefault()
  const nickname = document.myForm.nickname
  const age = document.myForm.age
  const email = document.myForm.email
  const senha = document.myForm.senha

	console.log("nickname:", nickname.value)
	console.log("age:", age.value)
	console.log("email:", email.value)
	console.log("senha:", senha.value)
}

function formValidation(e) {
  e.preventDefault()
  console.log('formValidation()')
  const nickname = document.myForm.nickname
  const age = document.myForm.age
  const email = document.myForm.email
  const senha = document.myForm.senha

  if(!nickname.value) return setErrorFor(nickname, "Nickname cannot be empty")
  if(!age.value) return setErrorFor(age, "age cannot be empty")
  if(!email.value) return setErrorFor(email, "email cannot be empty")
  if(!senha.value) return setErrorFor(senha, "senha cannot be empty")

  printInputValues()

}

function setErrorFor(input, errorMsg) {
  const fieldset = input.parentElement
  const small = fieldset.querySelector('small')

  small.removeAttribute('class')
  small.innerText = errorMsg
}

export default function Form() {

  return (
    <form name='myForm' onSubmit={formValidation} className='container'>
        <Input fieldName="nickname" placeholder="Insert your Nickname" />
        <Input fieldName="age" type="number" placeholder="Insert your age" />
        <Input fieldName="email" type="email" placeholder="Insert your e-mail" />
        <Input fieldName="senha" type="password" placeholder="Insert your password" />
        <button type='submit' className='btn btn-outline-success'>Enviar</button>
    </form>
  )
}
