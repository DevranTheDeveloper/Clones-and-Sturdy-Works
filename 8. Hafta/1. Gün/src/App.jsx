import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [value, setValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setBoxes(prevBoxes => [...prevBoxes, value]);
      setValue('');
    }
  };

  const deleteHandler = (index) => {
    const updatedBoxes = [...boxes];
    updatedBoxes.splice(index, 1);
    setBoxes(updatedBoxes);
  }

  return (
    <>
      <div className="main">
        <div className="inp">
          <input
            className='inpt'
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder='Liste elemanı giriniz'
          />
        </div>
        <div className="list">
          {boxes.map((boxValue, index) => (
            <div className="box" key={index}>
              <div className="sol">
                <input type="checkbox" />
                <h3>{boxValue}</h3>
              </div>
              <div className="sag">
                <button className='sil' onClick={() => deleteHandler(index)}>SİL</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
