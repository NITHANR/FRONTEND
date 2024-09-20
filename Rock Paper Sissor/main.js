let userScore =0;
let computerScore =0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const ScoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div  = document.querySelector("#r")
const paper_div =  document.querySelector("#p")
const scissor_div = document.querySelector("#s")

function getPcChoice(){
    const pc_choices = ['r','p','s'];
    const pc_choice  = Math.ceil(Math.random()*3)-1;
    return pc_choices[pc_choice];
}
function win(pl,pc){
    userScore++;
    userScore_span.innerHTML=userScore;
    const us = "User".fontsize(3).sup();
    const ps = "Computer".fontsize(3).sub();
    result_div.innerHTML = `<p>${((pl==='r')?"Rock":(pl==='p')?"Paper":"Scissor")}${us} Defeat's ${((pc==='r')?"Rock":(pc==='p')?"Paper":"Scissor")}${ps}. You Win 🐦‍🔥</p>`;
    const outline =document.getElementById(`${pl}`);
    outline.classList.add('green-glow');
    setTimeout(()=>{
        outline.classList.remove('green-glow');
    },300);
}

function loss(pl,pc){
    computerScore++;
    computerScore_span.textContent =computerScore;
    const us = "User".fontsize(3).sub();
    const ps = "Computer".fontsize(3).sup();
    result_div.innerHTML = `<p>${((pc==='r')?"Rock":(pc==='p')?"Paper":"Scissor")}${us} Beat's ${((pl==='r')?"Rock":(pl==='p')?"Paper":"Scissor")}${ps}. You Lost 😭 </p>`;
    const outline =document.getElementById(`${pl}`);
    outline.classList.add('red-glow');
    setTimeout(()=>{
        outline.classList.remove('red-glow');
    },300);
}

function draw(pl,pc){
    const us = "User".fontsize(3).sub();
    const ps = "Computer".fontsize(3).sub();
    result_div.innerHTML = `<p>${((pl==='r')?"Rock":(pl==='p')?"Paper":"Scissor")}${us} Defeat's ${((pc==='r')?"Rock":(pc==='p')?"Paper":"Scissor")}${ps}.Draw</p>`;
    const outline =document.getElementById(`${pl}`);
    outline.classList.add('grey-glow');
    setTimeout(()=>{
        outline.classList.remove('grey-glow');
    },300);
}

function game(player){
    const pc_choice = getPcChoice();
    // console.log(`User Choice : ${player}\nComputer Choice : ${pc_choice}`);
    const plpc = player + pc_choice;
    switch(plpc){
        case "rs":
        case "pr":
        case "sp":
            win(player,pc_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(player,pc_choice);
            break;
        default:
            loss(player,pc_choice);
    }
}
function main(){
    rock_div.addEventListener("click",function(){
        game('r');
    });
    
    paper_div.addEventListener("click",function(){
        game('p');

    });
    
    scissor_div.addEventListener("click",function(){
        game('s');

    });
}

main();
