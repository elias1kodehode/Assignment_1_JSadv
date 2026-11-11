const movableObject = document.getElementById("movable-object");

const left = "🚶";
const standing = "🧍";
const right = "🚶‍➡️";
movableObject.innerText = standing;
movableObject.style.fontSize = "4rem";

let x = 0;
let y = 0;
const objectWidth = movableObject.offsetWidth;
const objectHeight = movableObject.offsetHeight;

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    movableObject.style.left = `${move("left")}px`;
  }
  if (event.key === "ArrowRight") {
    console.log("test");
    movableObject.style.left = `${move("right")}px`;
  }
  if (event.key === "ArrowDown") {
    movableObject.style.top = `${move("down")}px`;
  }
  if (event.key === "ArrowUp") {
    movableObject.style.top = `${move("up")}px`;
  }
});

window.addEventListener("click", (event) => {
  x = event.clientX - objectWidth / 2;
  y = event.clientY - objectHeight / 2;
  if (event.clientX - objectWidth / 2 < 0) {
    x = 0;
  } else if (event.clientX + objectWidth / 2 > window.innerWidth) {
    x = window.innerWidth - objectWidth;
  }
  if (event.clientY - objectHeight / 2 < 0) {
    y = 0;
  } else if (event.clientY + objectHeight / 2 > window.innerHeight) {
    y = window.innerHeight - objectHeight;
  }
  movableObject.innerHTML = standing;
  movableObject.style.left = `${x}px`;
  movableObject.style.top = `${y}px`;
});

const speed = 10;
function move(direction) {
  addTail(x, y);
  drawTail();
  if (direction === "right") {
    if (x + objectWidth < window.innerWidth) {
      movableObject.innerText = right;
      x += speed;
      return x;
    } else {
      x = window.innerWidth - objectWidth;
      return x;
    }
  }
  if (direction === "left") {
    if (x > 0) {
      movableObject.innerText = left;

      x -= speed;
      return x;
    }
  }
  if (direction === "up") {
    if (y > 0) {
      movableObject.innerText = standing;
      y -= speed;
      return y;
    }
  }
  if (direction === "down") {
    if (y + objectHeight < window.innerHeight) {
      movableObject.innerText = standing;
      y += speed;
      return y;
    }
  }
}
