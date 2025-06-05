
const clockcount = document.getElementById("clockcount");
let timer =null;
let startTime  = 0;
let elapsedtime =0;
let isrunning = false;

function start(){
    if(!isrunning){
        startTime = Date.now() - elapsedtime;
        timer = setInterval(update,10);
        isrunning=true;
    }
        
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedtime = Date.now()-startTime;
        isrunning=false;
    }
}
function Reset(){
    clearInterval(timer);
    startTime  = 0;
    elapsedtime =0;
    isrunning = false;
    clockcount.textContent="00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedtime=currentTime -startTime;
    let hours = Math.floor(elapsedtime/(1000*60*60));
    let minutes = Math.floor(elapsedtime/(1000*60)%60);
    let seconds=Math.floor(elapsedtime/1000 % 60);
    let milliseconds = Math.floor(elapsedtime% 1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    clockcount.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}


