import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// PAGES
import HomePage from './pages/HomePage'
import ContatoPage from './pages/ContatoPage'
import ProdutosPage from './pages/ProdutosPage'
import NotFoundPage from './pages/NotFoundPage'
import FaqPage from './pages/FaqPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contato' element={<ContatoPage/>} />
          <Route path='/produtos' element={<ProdutosPage/>} />
          <Route path='/faq' element={<FaqPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
