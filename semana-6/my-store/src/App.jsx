import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// COMPONENTS
import Header from './components/Header'
import Banner from './components/Banner'
import CardProduto from './components/CardProduto'
import Footer from './components/Footer'

// PAGES
import HomePage from './pages/HomePage'
import ContatoPage from './pages/ContatoPage'
import ProdutosPage from './pages/ProdutosPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contato' element={<ContatoPage/>} />
          <Route path='/produtos' element={<ProdutosPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
