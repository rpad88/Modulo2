import './App.css'
import CardComponent from './components/Card/CardComponent'
import CardContentComponent from './components/CardContentComponent/CardContentComponent'

function App() {

  const user = {
    avatar: "https://github.com/rpad88.png",
    name: "Rodolfo Campos",
    profissao: "Servidor Público",
    email: "rodolfo_p_campos@estudante.sesisenai.org.br",
    telefone: "+55 65 xxxxx-xxxx"
  }

  return (
    <div className="container">
      <CardComponent avatar={user.avatar} neto={<CardContentComponent user={user}/>}/>
    </div>
  )
}

export default App
