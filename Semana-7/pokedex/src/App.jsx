import { React, useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import Header from './assets/components/Header'
import Card from './assets/components/Card'

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
      <div className="container">
        <h1 className='text-center'>Hello World</h1>
        <Form userList={userList} setUserList={setUserList} />
        <ul className='mt-4 row row-cols-3 gap-0 row-gap-2 p-4'>
          {
            userList.map((user) =>{
              return (<Card user={user}/>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
