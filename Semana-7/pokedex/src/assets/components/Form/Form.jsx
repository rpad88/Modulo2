import React from 'react'
import Input from './Input'

export default function Form({userList, setUserList}) {
  // function printInputValues() {
  //   const nickname = document.myForm.nickname
  //   const age = document.myForm.age
  //   const email = document.myForm.email
  //   const senha = document.myForm.senha
  
  //   console.log("nickname:", nickname.value)
  //   console.log("age:", age.value)
  //   console.log("email:", email.value)
  //   console.log("senha:", senha.value)
  // }
  
  function formValidation() {
    console.log('formValidation()')
    const nickname = document.myForm.nickname
    const age = document.myForm.age
    const email = document.myForm.email
    const senha = document.myForm.senha
  
    if(!nickname.value) return setErrorFor(nickname, "Nickname cannot be empty")
    if(!age.value) return setErrorFor(age, "age cannot be empty")
    if(!email.value) return setErrorFor(email, "email cannot be empty")
    if(!senha.value) return setErrorFor(senha, "senha cannot be empty")
  
    // printInputValues()
    console.log(nickname.value, age.value, email.value, senha.value)
    return {
            nickname: nickname.value,
            age: age.value,
            email: email.value,
            senha: senha.value
          }
  }
  
  function setErrorFor(input, errorMsg) {
    const fieldset = input.parentElement
    const small = fieldset.querySelector('small')
  
    small.removeAttribute('class')
    small.innerText = errorMsg
  }

  function register(e) {
    e.preventDefault()
    try {
      const {nickname, age, email, senha} = formValidation()
      const newUser = {nickname, age, email, senha}
      console.log(newUser)
      setUserList([...userList, newUser])
    } catch (error) {
      console.log(error.message)      
    }
  }

  return (
    <form name='myForm' onSubmit={register} className='container'>
        <Input fieldName="nickname" placeholder="Insert your Nickname" />
        <Input fieldName="age" type="number" placeholder="Insert your age" />
        <Input fieldName="email" type="email" placeholder="Insert your e-mail" />
        <Input fieldName="senha" type="password" placeholder="Insert your password" />
        <button type='submit' className='btn btn-outline-success'>Enviar</button>
    </form>
  )
}
