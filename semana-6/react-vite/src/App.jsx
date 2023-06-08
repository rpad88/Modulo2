import { useState } from 'react'
import './App.css'
import InformacoesPessoa from './components/InformacoesPessoa/InformacoesPessoa'

function App() {
  // const [count, setCount] = useState(0)

  const pessoa = {
    nome: "Rodolfo",
    idade: 34,
    hobbie: "viajar"
  }
  
  return (
    <>
      <div className='container-fluid '>
        <InformacoesPessoa nome="Rodolfo" idade={34} hobbies="viajar (com dinheiro)"/>
      </div>
    </>
  )
}

export default App
