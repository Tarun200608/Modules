let text = document.getElementById("text");
let result = document.getElementById("result");
let submit = document.getElementById("submit");
let age;
submit.onclick = function(){
    age = text.value;
    age = Number(age);
    if(age>=18){
        result.textContent="You are allowed to Vote.";
    }
    else if(age>=1){
        result.textContent="You are not allowed to Vote.";

    }

}