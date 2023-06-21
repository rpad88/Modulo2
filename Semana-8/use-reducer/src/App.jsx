import { useReducer } from 'react'
import './App.css'

// state = getVariavel
const reducer = (state,action) => {
  if(action.type === 'incrementar') {
    return {
      counter: state.counter + 1
    }
  }
  if(action.type === 'decrementar') {
    return {
      counter: state.counter - 1
    }
  }
  if(action.type === 'dobrar') {
    return {
      counter: state.counter * 2
    }
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <>
      <h1>{state.counter}</h1>
      <div className="card">
        <button onClick={() => dispatch({type: 'incrementar'})}>+</button>
        <button onClick={() => dispatch({type: 'decrementar'})}>-</button>
        <button onClick={() => dispatch({type: 'dobrar'})}>x</button>
      </div>
    </>
  )
}

export default App
