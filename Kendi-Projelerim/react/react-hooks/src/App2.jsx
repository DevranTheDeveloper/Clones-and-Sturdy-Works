import React, { useState } from 'react'

function App2() {

    const [object, setObject] = useState({
        count: 0,
        theme: "blue"
    })
    const count = object.count 
    const theme = object.theme 

    function azalt() {
        setObject({
            ...object,
            count: count - 1
        }
        )
    }
    function art() {
        setObject({
            ...object,
            count: count + 1
        }
        )
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

export default App2