import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UseEffect() {

    const [resource, setResource] = useState([])
    const [items, setItems] = useState([])
    const [windoowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize)
    })

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resource])

  return (
    <>
    <h1>useEffect Hook</h1>
    <button onClick={() => setResource("posts")}>Posts</button>
    <button onClick={() => setResource("users")}>Users</button>
    <button onClick={() => setResource("comments")}>Comments</button><br /><br />
    <span>{resource}</span><br/><br/>
    {items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })}
    <span>{windoowWidth}</span><br /><br />
    <Link to="/">useState</Link>
    </>
  )
}

export default UseEffect