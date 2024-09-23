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
                })
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
                })
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

    }
    // assign functions to keys

    function control(e){
        if(e.key === "ArrowLeft"){
            KeyLeft();
        }
        else if (e.key === "ArrowRight"){
            KeyRight();
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
});