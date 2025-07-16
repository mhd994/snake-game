let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// Keyboard controls
window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
    case "W":
      if (lastInputDirection.y !== 0) break;
      setDirection({ x: 0, y: -1 });
      break;
    case "ArrowDown":
    case "s":
    case "S":
      if (lastInputDirection.y !== 0) break;
      setDirection({ x: 0, y: 1 });
      break;
    case "ArrowLeft":
    case "a":
    case "A":
      if (lastInputDirection.x !== 0) break;
      setDirection({ x: -1, y: 0 });
      break;
    case "ArrowRight":
    case "d":
    case "D":
      if (lastInputDirection.x !== 0) break;
      setDirection({ x: 1, y: 0 });
      break;
  }
});

export function setDirection(direction) {
  // Prevent reversing direction
  if (
    direction.x === -lastInputDirection.x &&
    direction.y === -lastInputDirection.y
  ) {
    return;
  }
  inputDirection = direction;
}

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

// Vibration helper
function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

// Mobile button controls
document.getElementById("up").addEventListener("click", () => {
  setDirection({ x: 0, y: -1 });
  vibrate();
});
document.getElementById("down").addEventListener("click", () => {
  setDirection({ x: 0, y: 1 });
  vibrate();
});
document.getElementById("left").addEventListener("click", () => {
  setDirection({ x: -1, y: 0 });
  vibrate();
});
document.getElementById("right").addEventListener("click", () => {
  setDirection({ x: 1, y: 0 });
  vibrate();
});
