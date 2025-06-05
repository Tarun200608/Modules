let rn1 = document.getElementById("randumnumber1");
let rn2 = document.getElementById("randumnumber2");
let rn3 = document.getElementById("randumnumber3");
let rn4 = document.getElementById("randumnumber4");
let rn5 = document.getElementById("randumnumber5");
let rn6 = document.getElementById("randumnumber6");
let rn7 = document.getElementById("randumnumber7");
let rn8 = document.getElementById("randumnumber8");
let rn9 = document.getElementById("randumnumber9");
let rn10 = document.getElementById("randumnumber10");

// let r = Math.floor(Math.random()*6);

const min = 1;
const max = 9;
let r1 = Math.floor(Math.random()*(max-min+1)) + min;
let r2 = Math.floor(Math.random()*(max-min+1)) + min;
let r3 = Math.floor(Math.random()*(max-min+1)) + min;
let r4 = Math.floor(Math.random()*(max-min+1)) + min;
let r5 = Math.floor(Math.random()*(max-min+1)) + min;
let r6 = Math.floor(Math.random()*(max-min+1)) + min;
let r7 = Math.floor(Math.random()*(max-min+1)) + min;
let r8 = Math.floor(Math.random()*(max-min+1)) + min;
let r9 = Math.floor(Math.random()*(max-min+1)) + min;
let r10 = Math.floor(Math.random()*(max-min+1)) + min;
roll.onclick = function (){
    rn1.textContent = r1;
    rn2.textContent = r2;
    rn3.textContent = r3;
    rn4.textContent = r4;
    rn5.textContent = r5;
    rn6.textContent = r6;
    rn7.textContent = r7;
    rn8.textContent = r8;
    rn9.textContent = r9;
    rn10.textContent = r10;
}