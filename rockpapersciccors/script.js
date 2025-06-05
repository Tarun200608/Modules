const choices = ["rock","paper","scissors"];

const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerresultdisplay=document.getElementById("playerresultdisplay");
const computerresultdisplay=document.getElementById("computerresultdisplay");
let playerscore=0;
let computerscore =0;

function playgame(playerchoice){
    let computerchoice = choices[Math.floor(Math.random()*3)];
    let result ="";
    if(playerchoice === computerchoice){
        result="IT'S TIE"
    }
    else{
        switch (playerchoice){
            case "rock" :
                result=(computerchoice==="scissors")? "YOU WIN😉" : "YOU LOOSE😔";
                break;
            case "scissors":
                result=(computerchoice==="paper")? "YOU WIN😉" : "YOU LOOSE😔";
                break;
            case "paper":
                result=(computerchoice==="rock")? "YOU WIN😉" : "YOU LOOSE😔";
                break;
        }
    }
    playerdisplay.textContent=`Player:${playerchoice}`;
    computerdisplay.textContent=`Computer:${computerchoice}`;
    resultdisplay.textContent=result;
    resultdisplay.classList.remove("green-txt","red-txt");

    switch(result){
        case "YOU WIN😉":
            resultdisplay.classList.add("green-txt");
            playerscore++;
            playerresultdisplay.textContent=playerscore;
            break;
        case "YOU LOOSE😔":
            resultdisplay.classList.add("red-txt");
            computerscore++;
            computerresultdisplay.textContent=computerscore;
            break;

    }
}