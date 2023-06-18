import { useState } from 'react'
import './App.css'
import Form from './assets/components/Form'
import Header from './assets/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <h1 className='text-center'>Hello World</h1>
      <Form />
    </div>
  )
}

export default App
