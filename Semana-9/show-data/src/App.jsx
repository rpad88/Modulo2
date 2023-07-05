import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import CardComponent from './components/Card/CardComponent'
import CardContentComponent from './components/CardContentComponent/CardContentComponent'

import { Container, Alert, Card } from 'react-bootstrap'
import { AppButton } from './App.style.js'

function App() {

  const user = {
    avatar: "https://github.com/rpad88.png",
    name: "Rodolfo Campos",
    profissao: "Servidor Público",
    email: "rodolfo_p_campos@estudante.sesisenai.org.br",
    telefone: "+55 65 xxxxx-xxxx"
  }

  return (
    <>
      <Container>
        <CardComponent
          avatar={user.avatar}
          neto={<CardContentComponent user={user} />}
        />

        <CardComponent
          avatar={user.avatar}
          neto={<CardContentComponent user={user} />}
        />
        <Alert variant="success" className="mt-3">
          Hello World!
        </Alert>
        <AppButton>Clique aqui</AppButton>
      </Container>
    </>
  )
}

export default App
