var start = document.getElementById("start");
var boundary = document.getElementById("boundary");
var end = document.getElementById("end")

boundary.addEventListener("mouseover",gameOver());

let gameOver= ()=>{
    boundary.style.borderColor="red";
    
}