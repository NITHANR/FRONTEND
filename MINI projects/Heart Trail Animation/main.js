const body = document.querySelector("body");
// console.log(span);
// console.log(body);

body.addEventListener("mousemove",(event)=>{
    const X = event.offsetX;
    const Y = event.offsetY;
    const span = document.createElement("span");
    span.style.left=X+"px";
    span.style.top=Y+"px";
    const randomNum = Math.ceil(Math.random()*100);
    // console.log(randomNum);
    span.style.width=randomNum+"px";
    span.style.height=randomNum+"px";

    body.appendChild(span);
    setTimeout(()=>{
        span.remove();
    },3000);


});