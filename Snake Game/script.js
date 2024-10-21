// define elements
const board = document.getElementById("game-board");
const instructionText= document.getElementById("instruction-text");
const logo  = document.getElementById("logo");
const score = document.getElementById("score");
const highScoreText = document.getElementById('highScore');


const gridSize  = 20;
let snake = [{'x':10,'y':10}];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;


//draw game map,snake,food
function draw(){
    board.innerHTML='';
    drawSnake();
    drawFood();
    updateScore();
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
    if(gameStarted){
        const foodElement = createGameElement('div','food');
        setPosition(foodElement,food);
        board.appendChild(foodElement);
    }

}

// update score
function updateScore(){
    const curretScore = snake.length -1;
    score.innerText = curretScore.toString().padStart(3,'0');
}

// stop game
function stopGame(){
    clearInterval(gameInterval);
    gameStarted=false;
    instructionText.style.display="block";
    logo.style.display='block';

}

function updateHighScore(){
    const curretScore = snake.length -1;
    if(curretScore>highScore){
        highScore  =curretScore;
        highScoreText.textContent = highScore.toString().padStart(3,'0');
    }
    highScoreText.style.display='block';
}

// reset game
function resetGame(){
    updateHighScore();
    stopGame();
    snake = [{'x':10,'y':10}];
    food = generateFood();
    direction = 'right';
    gameSpeedDelay =200;
    updateScore();
}

// collusion chk
function checkCollusion(){
    const head = snake[0];
    if(head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize){
        resetGame();
    }
    for(let i =1;i<snake.length;i++){
        if(head.x === snake[i].x && head.y === snake[i].y){
            resetGame();
        }
    }
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
            checkCollusion()
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
        checkCollusion();
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