import './App.css'
import Header from './components/Header'
import googleLogo from './img/googlelogo_color_272x92dp.png'
// import Contador from './components/contador';
import Btn from './components/Btn'
import Search from './components/Search'
import Language from './components/language'

function App() {
  const lang = "pt-br"
  
  return (
		<div className="App">
			<Header />
			<img
				className="logo"
				src={googleLogo}
				alt="imagem do logo do google"
			/>
			<Search />
			<div className="btn-pesquisa">
				<Btn
					txt={lang === "pt-br" ? Language.BR.btn1 : Language.EN.btn1}
					prop2={25}
				/>
				<Btn
					txt={lang === "pt-br" ? Language.BR.btn2 : Language.EN.btn2}
					prop2={30}
				/>
			</div>
		</div>
  );
}

export default App;
