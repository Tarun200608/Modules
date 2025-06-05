const display=document.getElementById("display");


function appendtodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calaculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}