// let healthCount = 100;
// let hitCount = 0;
// let playerImage = "./honey-badger.jpg";
// let playerName = "Honey - the badger";

// NOTE switch from using globals to using an object

let player = {
  playerName: "Player 1",
  playerImage: "./honey-badger.jpg",
  hitCount: 0,
  healthCount: 100,
  items: []
}
let modifiers = {
  fire: { name: 'fire', modifier: 2, description: 'IT BURNS!' },
  knife: { name: 'knife', modifier: 4, description: 'IT SLICES!' },
  sword: { name: 'sword', modifier: 6, description: 'IT SHOOTS!' },
  block: { name: 'block', modifier: -1, description: 'block attacks' },
  shield: { name: 'shield', modifier: -5, description: 'shield attacks' }
}


let healthElem = document.getElementById("health-count");
let hitElem = document.getElementById("hit-count");
let gameOverElem = document.getElementById("game-over");
let imageElem = document.getElementById("player-image");
let playerNameElem = document.getElementById("player-name");
let modifierElem = document.getElementById("mod-list");

function playGame(hitType) {
  // console.log(hitType);
  decrementHealth(hitType);
  player.hitCount++;
  if (player.healthCount < 0) {
    player.healthCount = 0;
    drawGameOver()
  }
  updateGame();
}

function decrementHealth(item) {
  switch (item) {
    case "slap":
      player.healthCount -= (1 + addModifiers());
      break;
    case "punch":
      player.healthCount -= (5 + addModifiers());
      break;
    case "kick":
      player.healthCount -= (10 + addModifiers());
      break;
    default:
      alert("bad item in switch of decrementHealth()")
      break;
  }
}

function giveModifier(item) {
  player.items.push(modifiers[item].name)
  // console.log(player.items);
  disableButton(item, true);
  updateGame();
}

function addModifiers() {
  let modTotal = 0;
  for (let i = 0; i < player.items.length; i++)
    modTotal += modifiers[player.items[i]].modifier;
  return modTotal;
}

function disableButton(btnID, bool) {
  document.getElementById(btnID).disabled = bool;
}

function getPlayerItems() {
  let itemsString = "";
  for (let i = 0; i < player.items.length; i++) {
    itemsString += player.items[i] + ", ";
  }
  return itemsString;
}

function resetButtons() {
  for (let i = 0; i < player.items.length; i++) {
    disableButton(player.items[i], false);
  }
}

function removeModifier() {
  if (player.items.length > 0) {
    let lastModifier = player.items.pop();
    disableButton(lastModifier, false);
    updateGame();
  }
}

function resetGame() {
  player.hitCount = 0;
  player.healthCount = 100;
  gameOverElem.innerHTML = "";
  resetButtons();
  player.items = [];
  updateGame();
}

function updateGame() {
  healthElem.innerText = player.healthCount.toString();
  hitElem.innerText = player.hitCount.toString();
  playerNameElem.innerText = player.playerName;
  imageElem.src = player.playerImage;
  modifierElem.innerText = getPlayerItems();
}

function drawGameOver() {
  gameOverElem.innerHTML = (`
  <div class="card-img-overlay">
    <h1 class="card-title text-danger">GAME OVER</h1>
  </div>`);
}

setInterval(removeModifier, 5000);

updateGame();