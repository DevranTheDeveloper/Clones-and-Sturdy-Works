import React, { useState } from 'react'

function App3() {

    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState(" Blue")

    function azalt() {
        setCount(prevCount => prevCount - 1)
        setTheme(" Green")
    }
    function art() {
        setCount(prevCount => prevCount + 1)
        setTheme(" Red")
    }
  return (
    <>
    <button onClick={azalt}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={art}>+</button>
    </>
  )
}

export default App3