let count = 0;
let sure = 60;
const main = document.querySelector(".main");
const items = document.querySelector(".items");
const button = document.querySelector(".start");
const topHTML = '<div class="top"></div>';

button.addEventListener("click", function () {
  items.style.display = "none";
  main.insertAdjacentHTML("beforeend", topHTML);

  const topElement = document.querySelector(".top");
  topElement.addEventListener("click", function () {
    const randomX = Math.floor(Math.random() * 1800);
    const randomY = Math.floor(Math.random() * 900);
    topElement.style.left = `${randomX}px`;
    topElement.style.top = `${randomY}px`;

    // Increase the score and update the display
    count++;
    updateScoreDisplay();
  });
});

function updateScoreDisplay() {
  const scoreDisplay = document.querySelector(".score");
  scoreDisplay.textContent = `Score: ${count}`;

  while (true) {
    setTimeout(() => {
        sure--
    }, 1000)

    if (sure == 0) {
        const son = `
        <div class="son">
            <h1>Game Over</h1>
            <h1 class="score">Score: ${count}</h1>
        </div>
        `
        main.innerHTML = ""
        main.insertAdjacentHTML("beforeend", son)

    }
  }
}

