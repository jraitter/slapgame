let healthCount = 100;
let hitCount = 0;
let playerImage = "./honey-badger.jpg";
let playerName = "Honey - the badger";

// let player = {
//   name: "Hone the badger",
//   image: "./honey-badger.jpg",
//   hitCount: 0,
//   healthCount: 100
// }

let healthElem = document.getElementById("health-count");
let hitElem = document.getElementById("hit-count");
let gameOverElem = document.getElementById("game-over");
let imageElem = document.getElementById("player-image");
let playerNameElem = document.getElementById("player-name");


function playGame(hitType) {
  console.log(hitType);
  decrementHealth(hitType);
  hitCount++;
  if (healthCount < 0) {
    healthCount = 0;
    drawGameOver()
  }

  updateGame();
  // if (healthCount <= 0) {
  //   healthCount = 0;
  //   drawGameOver()
  // } else {
  //   decrementHealth(hitType)
  //   hitCount++;
  // }

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

function updateGame() {
  healthElem.innerText = healthCount.toString();
  hitElem.innerText = hitCount.toString();
  playerNameElem.innerText = playerName;
  imageElem.src = playerImage;
}

function drawGameOver() {
  gameOverElem.innerHTML = (`
  <div class="card-img-overlay">
    <h1 class="card-title text-danger">GAME OVER</h1>
  </div>`);
}

updateGame();