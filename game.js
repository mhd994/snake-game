import { SNAKE_SPEED ,
     update as updatedSnake ,
      draw as drawSnake,
    getSnakeHead,snakeIntersection} from './snake.js';
import{
    update as updatedFood,
    draw as drawFood,
}from './food.js'

import { outsideGrid } from './grid.js';



let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board")
let score = 0;
function updateScore() {
  document.getElementById('score').textContent = score;
}
if (onSnake(foodPosition)) {
  expandSnake(EXPANSION_RATE); // or grow the snake
  score += 1;                   // increase score
  updateScore();                // update the score display
  foodPosition = getRandomFoodPosition(); // new food
}

function main(currentTime){
    if(gameOver){
       if(confirm('Game Over ! Press Ok to Restart.')){
        window.location = "./index.html";
       }
       return;
    }
     window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    
    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updatedSnake();
    updatedFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML="";
drawSnake(gameBoard);
drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


