// define elements
const board = document.getElementById("game-board");

const gridSize  = 20;
let snake = [{'x':10,'y':10}];
let food = generateFood();

//draw game map,snake,food
function draw(){
    board.innerHTML='';
    drawSnake();
    drawFood();
}

// create snake or food
function createGameElement(tag,className){
    const element  = document.createElement(tag);
    element.className = className;
    return element;
}

//set position for foor or snake
function setPosition(ele,pos){
    ele.style.gridColumn=pos.x;
    ele.style.gridRow = pos.y;
}

// random pos for food
function generateFood(){
    const x = Math.floor(Math.random()*gridSize)+1;
    const y = Math.floor(Math.random()*gridSize)+1;
    return {'x':x,'y':y};
}

function drawSnake(){
    snake.forEach((segment) =>{
        const snakeElement = createGameElement('div','snake');
        setPosition(snakeElement,segment);
        board.appendChild(snakeElement);
    });
}

function drawFood(){
    const foodElement = createGameElement('div','food');
    console.log(foodElement);
    setPosition(foodElement,food);
    board.appendChild(foodElement);
}

function move(){
    // const head = 
    // start from woking on movement of snake
}

// testing
// draw();