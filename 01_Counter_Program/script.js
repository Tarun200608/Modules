let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let countlabel = document.getElementById("countlabel");

let count = 0;
increase.onclick = function (){
    count++;
    countlabel.textContent = count;
}
reset.onclick = function (){
    count=0;
    countlabel.textContent = count;
}
decrease.onclick = function (){
    count--;
    countlabel.textContent = count;
}