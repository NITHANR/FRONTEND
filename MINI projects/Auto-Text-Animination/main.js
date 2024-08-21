const container = document.querySelector(".container");
const names = ["NITHAN","ISHANI"];
var charIndex=0;
var nameIndex=0;
updateText();
function updateText(){
    container.innerHTML = `<h1>I am ${names[nameIndex].charAt(0)==='N'?"Mr.":"Mrs."  }
            ${names[nameIndex].slice(0,charIndex)}</h1>`;
    charIndex++;
    if(names[nameIndex].length===charIndex-1){
        nameIndex++ ;
        charIndex=0;
    }
    if(nameIndex=== names.length){
        nameIndex=0;
        charIndex=0;
    }
    setTimeout(updateText,400);
};
