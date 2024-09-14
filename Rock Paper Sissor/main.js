const userScore =0;
const computerScore =0;
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

function game(player){

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

// // my code
// const game = (player) =>{
//     const pc_opt = ['r','p','s'];
//     const pc_choice  = Math.ceil(Math.random()*3)-1;
//     const pc  = pc_opt[pc_choice];
//     if(pc===player){
//         console.log("Tie");
//     }
//     else{
//         if(pc==='r' && player === 's'){
//             console.log("Pc won");
//         }
//         else if(pc==='p' && player === 'r' ){
//             console.log("Pc won");
//         }
//         else if(pc ==='s' && player === 'p'){
//             console.log("Pc won");
//         }
//         else{
//             console.log("Player Won");
//         }

//     }
// }
