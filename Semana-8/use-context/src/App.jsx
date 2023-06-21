import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ActionsComponent from './components/ActionsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<Header />
      <ActionsComponent />
		</>
  );
}

export default App
