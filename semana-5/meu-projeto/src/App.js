import './App.css'
import Header from './components/Header'
import googleLogo from './img/googlelogo_color_272x92dp.png'
// import Contador from './components/contador';
import Btn from './components/Btn'
import Search from './components/Search'
import Language from './components/language/Language'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState('br')
  
  return (
		<div className="App">
			<Header setLang={setLang}/>
			<img
				className="logo"
				src={googleLogo}
				alt="imagem do logo do google"
			/>
			<Search placeholder="O que você procura?"/>
			<div className="btn-pesquisa">
				<Btn
					txt={lang === "br" ? Language.BR.btn1 : Language.EN.btn1}
					prop2={25}
				/>
				<Btn
					txt={lang === "br" ? Language.BR.btn2 : Language.EN.btn2}
					prop2={30}
				/>
			</div>
		</div>
  );
}

export default App;
