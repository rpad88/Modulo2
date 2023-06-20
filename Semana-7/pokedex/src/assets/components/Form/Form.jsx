import React from 'react'
import Input from './Input'

export default function Form({userList, setUserList}) {
  
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
  
    // console.log(nickname.value, age.value, email.value, senha.value)
    return {
            nickname: nickname.value,
            age: age.value,
            email: email.value,
            senha: senha.value,
            likes: 0
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
      const {nickname, ...rest} = formValidation()
      const newUser = {nickname, ...rest}
      // console.log(newUser)
      if(userList.some(user => user.nickname === nickname)) return console.error("Nickname já existe.")      
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
