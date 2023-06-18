import { React, useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import Header from './assets/components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [userList, setUserList] = useState([
    {
      nickname: "teste",
      age: 23,
      email: "teste@teste",
      senha: "123"
    },
  ])

  return (
    <div className="app">
      <Header />
      <h1 className='text-center'>Hello World</h1>
      <Form userList={userList} setUserList={setUserList} />
      <ul>
        {
          userList.map((user) =>{
            return <li key={user.nickname}>{user.nickname}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
