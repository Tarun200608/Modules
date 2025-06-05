let pw = document.getElementById("passwd");
let button = document.getElementById("btn");
function generatepassword(length,inclowercase,incuppercase,incnumbers,incsymbols){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789"
    const symbols = "!@#$%^&*"

    let allowedchars = "";
    let password = "";
    allowedchars += inclowercase ? lowercase : "";
    allowedchars += incuppercase ? uppercase : "";
    allowedchars += incnumbers ? numbers : "";
    allowedchars += incsymbols ? symbols : "";

    if(length <= 0){
        return ("password length must be atleast 1");
    }
    if(allowedchars.length === 0){
        return ("Atleast 1 set of character needs to be selected");
    }
    for(let i=0;i<length;i++){
        const randindex = Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randindex];
    }
    return password;
}
const passwordlength = 12;
const inclowercase = true;
const incuppercase = true;
const incnumbers = true;
const incsymbols = true;

const password= generatepassword(passwordlength,inclowercase,incuppercase,incnumbers,incsymbols);
// console.log(${password})
button.onclick = function(){

    pw.textContent = password
}