let healthCount = 100;
let hitCount = 0;
let healthElem = document.getElementById("health-count");
let hitElem = document.getElementById("hit-count");
let gameOverElem = document.getElementById("game-over");


function playGame(hitType) {
  hitCount++;
  console.log(hitType);
  if (healthCount < 1) {
    healthCount = 0;
    drawGameOver();
  } else {
    decrementHealth(hitType)
  }

  updateGame();
}

function updateGame() {
  healthElem.innerText = healthCount.toString();
  hitElem.innerText = hitCount.toString();
}

function decrementHealth(item) {
  switch (item) {
    case "slap":
      healthCount--;
      break;
    case "punch":
      healthCount -= 5;
      break;
    case "kick":
      healthCount -= 10;
      break;
    default:
      alert("bad item in switch of decrementHealth()")
      break;
  }
}
function drawGameOver() {
  gameOverElem.innerHTML = (`
  <div class="card-img-overlay">
    <h1 class="card-title text-danger">GAME OVER</h1>
  </div>`);
}

updateGame();