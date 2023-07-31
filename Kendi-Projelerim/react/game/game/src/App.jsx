import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [up, setUp] = useState(0);
  const [right, setRight] = useState(0);
  const [direction, setDirection] = useState("");
  const [count, setCount] = useState(0);
  const [snakeCells, setSnakeCells] = useState([]);
  const [lastDirection, setLastDirection] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") {
        setDirection("up");
      } else if (event.key === "ArrowDown") {
        setDirection("down");
      } else if (event.key === "ArrowRight") {
        setDirection("right");
      } else if (event.key === "ArrowLeft") {
        setDirection("left");
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const movePlayer = () => {
      switch (direction) {
        case "up":
          if (lastDirection !== "down") {
            setLastDirection("up");
            setUp(prevUp => prevUp - 50);
          }
          break;
        case "down":
          if (lastDirection !== "up") {
            setLastDirection("down");
            setUp(prevUp => prevUp + 50);
          }
          break;
        case "right":
          if (lastDirection !== "left") {
            setLastDirection("right");
            setRight(prevRight => prevRight - 50);
          }
          break;
        case "left":
          if (lastDirection !== "right") {
            setLastDirection("left");
            setRight(prevRight => prevRight + 50);
          }
          break;
        default:
          break;
      }
      checkCollision();
    };

    if (direction) {
      const interval = setInterval(movePlayer, 200);
      return () => clearInterval(interval);
    }
  }, [direction, lastDirection]);

  const getRandomPosition = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const fruitWidth = 50;
    const fruitHeight = 50;

    const randomUp = Math.floor(Math.random() * (windowHeight - fruitHeight));
    const randomRight = Math.floor(Math.random() * (windowWidth - fruitWidth));

    return { top: randomUp, right: randomRight };
  };

  const moveFruitRandomly = () => {
    const randomPosition = getRandomPosition();
    setFruitPosition(randomPosition);
  };

  const checkCollision = () => {
    const playerElement = document.querySelector('.player');
    const fruitElement = document.querySelector('.fruit');
  
    if (playerElement && fruitElement) {
      const playerRect = playerElement.getBoundingClientRect();
      const fruitRect = fruitElement.getBoundingClientRect();
  
      const playerX = playerRect.left;
      const playerY = playerRect.top;
      const playerWidth = playerRect.width;
      const playerHeight = playerRect.height;
  
      const fruitX = fruitRect.left;
      const fruitY = fruitRect.top;
      const fruitWidth = fruitRect.width;
      const fruitHeight = fruitRect.height;
  
      if (
        playerX < fruitX + fruitWidth &&
        playerX + playerWidth > fruitX &&
        playerY < fruitY + fruitHeight &&
        playerY + playerHeight > fruitY
      ) {
        moveFruitRandomly();
        setCount(prevCount => prevCount + 1);
        growSnake(); // Her meyve yendiğinde yılanın uzunluğunu artır
      }
    }
  };
  
  const growSnake = () => {
    setSnakeCells(prevCells => {
      const lastCell = prevCells[prevCells.length - 1];
      const newCell = { top: lastCell.top, right: lastCell.right };
  
      // Yılanın uzunluğunu artırmak için yeni hücreyi ekleyelim
      return [...prevCells, newCell];
    });
    setCount(prevCount => prevCount - 1); // Yılanın uzunluğunu artırırken sayacı azaltmayalım
  };
  

  const [fruitPosition, setFruitPosition] = useState(getRandomPosition());

  useEffect(() => {
    checkCollision();
    // Takip eden hücrelerin gecikmeli bir şekilde gelmesi için setTimeout kullanalım
    setTimeout(() => {
      setSnakeCells(prevCells => {
        const headCell = { top: up, right: right };
        return [headCell, ...prevCells.slice(0, prevCells.length - 1)];
      });
    }, 200); // Yılanın takip eden hücrelerinin gecikme süresi
  }, [up, right]);

  useEffect(() => {
    setSnakeCells(prevCells => prevCells.slice(0, snakeCells.length - count));
  }, [count]);

  return (
    <>
      <h1 className='score'>Score: {count}</h1>
      <div
        className="player"
        style={{
          top: `${up}px`,
          right: `${right}px`,
        }}
      />
      {snakeCells.map((cell, index) => (
        <div
          className="snake-cell"
          key={index}
          style={{
            top: `${cell.top}px`,
            right: `${cell.right}px`,
          }}
        />
      ))}
      <div
        className="fruit"
        style={{
          top: `${fruitPosition.top}px`,
          right: `${fruitPosition.right}px`,
        }}
      />
    </>
  );
}

export default App;
