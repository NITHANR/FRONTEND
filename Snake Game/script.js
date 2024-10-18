// define elements
const board = document.getElementById("game-board");
const instructionText= document.getElementById("instruction-text");
const logo  = document.getElementById("logo");

const gridSize  = 20;
let snake = [{'x':10,'y':10}];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

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
    setPosition(foodElement,food);
    board.appendChild(foodElement);
}

function move(){
    const head = {...snake[0]};   // not a reference but if we use snake[0] it a reference to the org one
    switch(direction){
        case 'right':
            head.x++;
            break;
        case 'up':
            head.y--;
            break;
        case 'left':
            head.x--;
            break;
        case 'down':
            head.y++;
            break;
    }
    snake.unshift(head);
    // snake.pop();
    if(head.x === food.x && head.y === food.y){
        food=generateFood();
        increaseSpeed();
        clearInterval(gameInterval);//past intervals
        gameInterval=setInterval(()=>{
            move();
            // checkCollusion()
            draw();
        },gameSpeedDelay);
    }
    else{
        snake.pop();
    }
}

// inc spd
function increaseSpeed(){
    if(gameSpeedDelay>150){
        gameSpeedDelay-=5;
    }
    else if(gameSpeedDelay>100){
        gameSpeedDelay-=3;
    }
    else if(gameSpeedDelay>50){
        gameSpeedDelay-=2;
    }
    else if(gameSpeedDelay>25){
        gameSpeedDelay-=1;
    }
}

function startGame(){
    gameStarted =true;
    instructionText.style.display="none";
    logo.style.display='none';
    gameInterval = setInterval(()=>{
        move();
        // checkCollusion();
        draw();
    },gameSpeedDelay);

}

// Key handler
function handleKeyPress(event){
    if(gameStarted===false && ((event.key === ' ')|| (event.code === 'Space'))){
        startGame();
    }
    else{
        switch(event.key){
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }


    }
}



document.addEventListener("keydown",handleKeyPress);