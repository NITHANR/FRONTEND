const ip = document.querySelector(".input");
const b = document.querySelector("body");
// ip.checked = localStorage.getItem("Save");
ip.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody(){
    if(ip.checked){
        b.style.backgroundColor = "black";
    }else{
        b.style.backgroundColor = "white";
    }
};

ip.addEventListener("input",(event)=>{
    updateBody();
    setLocalStorage();
});

function setLocalStorage(){
    localStorage.setItem("mode",
        JSON.stringify(ip.checked));
};