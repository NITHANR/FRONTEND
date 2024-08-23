const button = document.querySelector(".btn")

button.addEventListener("mouseover",(event)=>{
    const top = event.pageY - button.offsetTop;
    const left = event.pageX - button.offsetLeft;
    button.style.setProperty("--xPos",left+"px");
    button.style.setProperty("--yPos",top+'px');
});