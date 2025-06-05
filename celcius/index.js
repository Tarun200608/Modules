const input =document.getElementById("input");
const radio =document.getElementById("radio");
const radi01 =document.getElementById("radi01");
const result =document.getElementById("result");
let temp;

function convert(){
    if(radio.checked){
        temp =Number(input.value);
        temp = temp*(9/5) + 32;
        result.textContent= temp.toFixed(1)+"F";
    }
    else if(radi01.checked){
        temp =Number(input.value);
        temp = (temp-32)*(5/9);
        result.textContent= temp.toFixed(1)+"C";
    }
    else{
        result.textContent= "Select a unit";
    }

}