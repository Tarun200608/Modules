let checkbox = document.getElementById("cb");
let visa = document.getElementById("visa");
let mastercard = document.getElementById("mastercard");
let paypal = document.getElementById("paypal");

let submit = document.getElementById("submit");

let subresult = document.getElementById("subresult");
let paymentresult = document.getElementById("paymentresult");

submit.onclick = function(){
    if(cb.checked){
        subresult.textContent="You are subscribed!"
    }
    else{
        subresult.textContent="You are NOT subscribed yet!"
    }
    if(visa.checked){
        paymentresult.textContent="You are paying with Visa."
    }
    else if(mastercard.checked){
        paymentresult.textContent="You are paying with Master Card." 
    }
    else if(paypal.checked){
        paymentresult.textContent="You are paying with Paypal." 
    }
    else{
        paymentresult.textContent="You must select a payment method!!!"
    }
}