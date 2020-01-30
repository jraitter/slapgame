let healthCount = 100;
let hitCount = 0;
let healthElem = document.getElementById("health-count");
let hitElem = document.getElementById("hit-count");


function playGame(hitType) {
  decrementHealth(hitType);
  hitCount++;
  console.log(hitType);
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

updateGame();