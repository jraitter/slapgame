// let healthCount = 100;
// let hitCount = 0;
// let playerImage = "./honey-badger.jpg";
// let playerName = "Honey - the badger";

// NOTE switch from using globals to using an object

let player1 = {
  name: "Player 1",
  playerImage: "./honey-badger.jpg",
  hitCount: 0,
  healthCount: 100
}

let healthElem = document.getElementById("health-count");
let hitElem = document.getElementById("hit-count");
let gameOverElem = document.getElementById("game-over");
let imageElem = document.getElementById("player-image");
let playerNameElem = document.getElementById("player-name");


function playGame(hitType) {
  console.log(hitType);
  decrementHealth(hitType);
  player1.hitCount++;
  if (player1.healthCount < 0) {
    player1.healthCount = 0;
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
      player1.healthCount--;
      break;
    case "punch":
      player1.healthCount -= 5;
      break;
    case "kick":
      player1.healthCount -= 10;
      break;
    default:
      alert("bad item in switch of decrementHealth()")
      break;
  }
}

function resetGame() {
  player1.hitCount = 0;
  player1.healthCount = 100;
  gameOverElem.innerHTML = "";
  updateGame();
}

function updateGame() {
  healthElem.innerText = player1.healthCount.toString();
  hitElem.innerText = player1.hitCount.toString();
  playerNameElem.innerText = player1.playerName;
  imageElem.src = player1.playerImage;
}

function drawGameOver() {
  gameOverElem.innerHTML = (`
  <div class="card-img-overlay">
    <h1 class="card-title text-danger">GAME OVER</h1>
  </div>`);
}

updateGame();