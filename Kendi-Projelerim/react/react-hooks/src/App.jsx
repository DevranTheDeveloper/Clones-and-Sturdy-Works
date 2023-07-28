import React, { useState, Component, useEffect } from 'react'
import './App.css'
import App2 from './App2'
import App3 from './App3'
import { Link } from 'react-router-dom'
import MyClass from './Class'

function App() {
  const [count, setCount] = useState(0)
  const [yazi, setYazi] = useState([])
  let [sayi, setSayi] = useState(0)

  const tikla = (event) => {
    if (event.key = "Enter") {
      setSayi(prevSayi => prevSayi + 1)
      if (sayi == 0) {
        setYazi("Tıklandı")
      } else if (sayi == 9) {
        setYazi("Yeter")
      } else if (sayi == 99) {
        setYazi("Oha lan yavaş")
      } else if (sayi == 999) {
        setYazi("İşsiz")
      }
    }
  }



  console.log(sayi)
  function azalt() {
    setCount(prevCount => prevCount - 1)
  }
  function arttır() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <h1>useState</h1>
      <button onClick={azalt}>-</button>
      <span>{count}</span>
      <button onClick={arttır}>+</button><br/><br/>
      <App2/><br/><br/>
      <App3/><br/><br/>
      <button onKeyDown={tikla}>Tıkla Dostum</button><br />
      <span>{yazi}</span><br /><br />
      <Link to="UseEffect">UseEffect</Link>
      <MyClass/>
    </>
  )
}

//* class tabanlı componentlerde this.state özelliği kullanılmaktadır 
//* this.state kavramı bir nesne içerisindeki componentinin durumunu tutar.
//* bu durumu güncelleyebilmek için this.setState() methodu kullanılır

class Selamlama extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'merhaben'
    }
  }
  render(){
    let {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <Link to="class">MyClass</Link>
      </div>
      
    )
  }
}
export default App
