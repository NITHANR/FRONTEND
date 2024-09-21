document.addEventListener("DOMContentLoaded",(event)=>{
    const scoreDisplay=document.getElementById('score');
    const resultDisplay=document.getElementById('result');
    const gridDisplay = document.querySelector('.grid');
    const width =4;
    let squares =[];

    function createBoard() {
        for(let i =0;i<width*width;i++){
            const square = document.createElement('div');
            square.innerHTML=0;
            gridDisplay.append(square);
            squares.push(square);
        }
        generate();
        generate();
        moveRight();
    }
   
    createBoard();


    function generate(){
        const randNUm = Math.floor(Math.random()*16);
        // console.log(randNUm);
        if(squares[randNUm].textContent == 0){
            squares[randNUm].innerHTML = 2;
        }else generate();
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
                // console.log(row);
                const filteredRow = row.filter(ele => ele);
                // console.log(filteredRow);
                const missing = 4 -filteredRow.length;
                const zeors = Array(missing).fill(0);
                const newRow = zeors.concat(filteredRow);
                console.log(newRow);

            }
        }
    }
});