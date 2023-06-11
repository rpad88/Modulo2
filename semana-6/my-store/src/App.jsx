import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CardProduto from './components/CardProduto'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner txt1="ESCOLHA O MELHOR PRA VOCÊ" txt2="nossos produtos" />
      <CardProduto />
      <Footer />
    </>
  )
}

export default App
