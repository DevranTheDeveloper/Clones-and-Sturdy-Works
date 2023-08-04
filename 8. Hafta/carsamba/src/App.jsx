import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [userList, setUserList] = useState([])

  const submit = () => {
    const newUser = {
      name: name,
      surname: surname
    }
    setUserList([...userList, newUser])
    setName('')
    setSurname('')
  }

  return (
    <>
      <Navbar />
      <header className='hdr'>
        <div className="bck">
          <h1 className='baslik'>TITAN</h1>
        </div>
      </header>
      <div className="yazi">
        <Link to="page2"><h1>2. Sayfa</h1></Link>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='surname' />
        <button onClick={submit}>Submit</button>
      </div>
        {userList.map((user, index) => (
          <div key={index}>
            <div className="user">
              <h1>{user.name}</h1>
              <h1>{user.surname}</h1>
            </div>
          </div>
        ))}
    </>
  )
}

export default App
