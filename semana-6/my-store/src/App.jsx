import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner/Banner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner txt1="ESCOLHA O MELHOR PRA VOCÊ" txt2="nossos produtos" />
    </>
  )
}

export default App
