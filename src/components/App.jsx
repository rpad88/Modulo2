import '../styles/App.css'

function App() {
  // const [count, setCount] = useState(0)
  function evento() {
    console.log('clicado')
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={evento}>Abra aqui</button>
    </>
  )
}

export default App
