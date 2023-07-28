import React, { useState } from 'react'
import './App.css'
import App2 from './App2'
import App3 from './App3'

function App() {

  const [count, setCount] = useState(0)

  function azalt() {
    setCount(prevCount => prevCount - 1)
  }
  function arttır() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={azalt}>-</button>
      <span>{count}</span>
      <button onClick={arttır}>+</button><br/><br/>
      <App2/><br/><br/>
      <App3/>
    </>
  )
}

export default App
