const image_container = document.querySelector(".image-container");
const btn = document.querySelector(".btn");
var imagC=10;
btn.addEventListener("click",(event)=>{
    newImages();
});

const newImages = ()=>{
    for(var i =0;i<=imagC;i++){
    const image = document.createElement("img");
    const randnum = Math.ceil(Math.random()*100)
    image.src=`https://picsum.photos/300?random=${randnum}`;
    image_container.append(image);}
}