import './App.css';
import Navbar from './combonents/navbar';
import Footer from './combonents/footer';

function button() {
  document.querySelector(".button").className = "red"
}

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <header className="App-header">
        <div className='deneme'>
          <div className='box1'></div>
          <button className='button' onClick={button}>BAS</button>
        </div>
        <div className='deneme'>
          <div className='box1'></div>
          <button className='button' onClick={button}>BAS</button>
        </div>
        <div className='deneme'>
          <div className='box1'></div>
          <button className='button' onClick={button}>BAS</button>
        </div>
        
      </header>
      <Footer />
    </div>
    </>
  );
}

export default App;
