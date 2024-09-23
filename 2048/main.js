document.addEventListener("DOMContentLoaded",(event)=>{
    const scoreDisplay=document.getElementById('score');
    const resultDisplay=document.getElementById('result');
    const gridDisplay = document.querySelector('.grid');
    const width =4;
    let squares =[];
    let score=0;
    

    function createBoard() {
        for(let i =0;i<width*width;i++){
            const square = document.createElement('div');
            square.innerHTML=0;
            gridDisplay.append(square);
            squares.push(square);
        }
        generate();
        generate();

    }
   
    createBoard();


    function generate(){
        const randNUm = Math.floor(Math.random()*16);
        if(squares[randNUm].textContent == 0){
            squares[randNUm].innerHTML = 2;
            checkGameOver();
        }
        else generate();
    }

    function moveRight(){
        for(let i=0;i<16;i++){
            if(i%4===0){
                const ele1 = squares[i].innerHTML;
                const ele2 = squares[i+1].innerHTML;
                const ele3 = squares[i+2].innerHTML;
                const ele4 = squares[i+3].innerHTML;
                const row = [ele1,ele2,ele3,ele4];
                row.forEach((ele,ind) =>{
                    row[ind] = parseInt(ele);
                });
                const filteredRow = row.filter(ele => ele);
                // console.log(filteredRow);
                const missing = 4 -filteredRow.length;
                const zeors = Array(missing).fill(0);
                const newRow = zeors.concat(filteredRow);

                squares[i].textContent=newRow[0];
                squares[i+1].textContent=newRow[1];
                squares[i+2].textContent=newRow[2];
                squares[i+3].textContent=newRow[3];
            }
        }
    }

    function moveleft(){
        for(let i=0;i<16;i++){
            if(i%4==0){
                const ele1 = squares[i].innerHTML;
                const ele2 = squares[i+1].innerHTML;
                const ele3 = squares[i+2].innerHTML;
                const ele4 = squares[i+3].innerHTML;
                const row = [ele1,ele2,ele3,ele4];
                row.forEach((ele,ind)=>{
                    row[ind] = parseInt(ele);
                });
                const filteredRow = row.filter(ele => ele);
                const missing = 4-filteredRow.length;
                const arr = filteredRow.concat(Array(missing).fill(0));
                squares[i].innerHTML=arr[0];
                squares[i+1].textContent=arr[1];
                squares[i+2].textContent=arr[2];
                squares[i+3].textContent=arr[3];
                
                // console.log(arr);
            }
        }
    }

    function moveUp(){
        for(let i=0;i<4;i++){
            const ele1 = squares[i].innerHTML;
            const ele2 = squares[i+4].innerHTML;
            const ele3 = squares[i+8].innerHTML;
            const ele4 = squares[i+12].innerHTML;
            const column = [ele1,ele2,ele3,ele4];
            column.forEach((ele,ind)=>{
                column[ind]=parseInt(ele);
            });
            // console.log(column)
            const filteredColumn = column.filter(ele => ele);
            const missing = 4-filteredColumn.length;
            const arr = filteredColumn.concat(Array(missing).fill(0));
            // console.log(arr);
            squares[i].innerHTML = arr[0];
            squares[i+width].textContent =arr[1];
            squares[i+width*2].textContent = arr[2];
            squares[i+width*3].innerHTML = arr[3];

        }
    }

    function moveDown(){
        for(let i=0;i<4;i++){
            const ele1 = squares[i].innerHTML;
            const ele2 = squares[i+4].innerHTML;
            const ele3 = squares[i+8].innerHTML;
            const ele4 = squares[i+12].innerHTML;
            const column = [ele1,ele2,ele3,ele4];
            // console.log(column);
            column.forEach((ele,ind)=>{
                column[ind]=parseInt(ele);
            })
            const filteredColumn = column.filter(ele => ele);
            const missing = 4 - filteredColumn.length;
            const arr = (Array(missing).fill(0)).concat(filteredColumn);
            // console.log(arr);
            squares[i].innerHTML=arr[0];
            squares[i+width].textContent =arr[1];
            squares[i+width*2].textContent = arr[2];
            squares[i+width*3].innerHTML = arr[3];

        }
    }

    function combinedRow(){
        for(let i=0;i<15;i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedScore = parseInt(squares[i].innerHTML)*2;
                squares[i].innerHTML = combinedScore;
                squares[i+1].innerHTML=0;
                score+=combinedScore;
                scoreDisplay.innerHTML = score;
            }
        }
        checkWinner();
    }
    function combinedColumn(){
        for(let i=0;i<12;i++){
            if(squares[i].innerHTML === squares[i+width].innerHTML){
                let combinedScore = parseInt(squares[i].innerHTML)*2;
                squares[i].innerHTML=combinedScore;
                squares[i+width].innerHTML=0;
                score+=combinedScore;
                scoreDisplay.innerHTML = score;
            }
        }
        checkWinner();
    }

    // assign functions to keys
    function control(e){
        if(e.key === "ArrowLeft"){
            KeyLeft();
        }
        else if (e.key === "ArrowRight"){
            KeyRight();
        }
        else if(e.key === "ArrowUp"){
            KeyUp();
        }
        else if(e.key === "ArrowDown"){
            KeyDown();
        }
    }

    document.addEventListener("keydown",control);

    function KeyLeft(){
        moveleft();
        combinedRow();
        moveleft();
        generate();
    }
    function KeyRight(){
        moveRight();
        combinedRow();
        moveRight();
        generate();
    }
    function KeyUp(){
        moveUp();
        combinedColumn();
        moveUp();
        generate();
    }
    function KeyDown(){
        moveDown();
        combinedColumn();
        moveDown();
        generate();
    }

    // 2048 winner check and display
    function checkWinner(){
        for(let i =0;i<16;i++){
            if(squares[i].innerHTML == 2048){
                resultDisplay.innerHTML = "You Win!";
                document.removeEventListener('keydown',control);
                setTimeout(clearInterval,3000);
            }
        }
    }
    // loss check - check for zeros
    function checkGameOver(){
        let zeros =0;
        for(let i=0;i<16;i++){
            if(squares[i].innerHTML == 0){
                zeros++;
            }
        }
        if(zeros==0){
            resultDisplay.innerHTML = "You Loss";
            document.removeEventListener("keydown",control);
            setTimeout(clearInterval,3000);
        }
    }

    // clearing the interval for colors
    function clearInterval(){
        clearInterval(timer);
    }

    // add colors
    function addColors(){
        for(let i =0;i<16;i++){
            if(squares[i].innerHTML == 0){
                squares[i].style.backgroundColor = "#afa192";
            }
            else if(squares[i].innerHTML == 2){
                squares[i].style.backgroundColor = "#eee4da";
            }
            else if(squares[i].innerHTML == 4){
                squares[i].style.backgroundColor = "#ede0c8";
            }
            else if(squares[i].innerHTML == 8){
                squares[i].style.backgroundColor = "#f2b179";
            }
            else if(squares[i].innerHTML == 16){
                squares[i].style.backgroundColor = "#ffcea4";
            }
            else if(squares[i].innerHTML == 32){
                squares[i].style.backgroundColor = "#e8c064";
            }
            else if(squares[i].innerHTML == 64){
                squares[i].style.backgroundColor = "#ffab6e";
            }
            else if(squares[i].innerHTML == 128){
                squares[i].style.backgroundColor = "#fd9982";
            } 
            else if(squares[i].innerHTML == 256){
                squares[i].style.backgroundColor = "#ead79c";
            }
            else if(squares[i].innerHTML == 512){
                squares[i].style.backgroundColor = "#76daff";
            }
            else if(squares[i].innerHTML == 1024){
                squares[i].style.backgroundColor = "#beeaa5";
            }
            else if(squares[i].innerHTML == 2048){
                squares[i].style.backgroundColor = "#d7d4f0";
            }
        }
    }
    addColors();
    const timer = setInterval(addColors,50);
});