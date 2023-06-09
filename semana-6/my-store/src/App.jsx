import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import CardProduto from './components/CardProduto/CardProduto'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner txt1="ESCOLHA O MELHOR PRA VOCÊ" txt2="nossos produtos" />
      <CardProduto />
    </>
  )
}

export default App
