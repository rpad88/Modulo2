import './App.css';
import Header from './components/header';
import googleLogo from './img/googlelogo_color_272x92dp.png'
import Contador from './components/contador';
import Btn from './components/btn';
import Search from './components/search';

function App() {

  function soma(a,b) {
    return a+b;
  }

  return (
    <div className="App">
      <Header nome="Rodolfo" />
      <br />
      <img className='logo' src={googleLogo} alt="imagem do logo do google" />
      <br />
      <Search />
      <br />
      <div className='btn-pesquisa'>
        <Btn txt="Pesquisa Google" />
        <Btn txt="Estou com sorte" />
      </div>
      
      <p>A soma é {soma(2,3)}</p>
      <Contador />
    </div>
  );
}

export default App;
