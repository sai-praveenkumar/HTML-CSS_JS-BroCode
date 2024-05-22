const mycheckbox = document.getElementById("myCheckbox");
const visabtn = document.getElementById("visaBtn");
const mastercardbtn = document.getElementById("masterCardBtn");
const paypalbtn = document.getElementById("payPalBtn");
const submit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentresult = document.getElementById("paymentResult");


submit.onclick = function(){
    
    if(mycheckbox.checked){
        subResult.textContent = `You are subscribed`; 
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }
    if(visabtn.checked){
        paymentresult.textContent =`You are paying with Visa`;
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent=`You are paying with MasterCard`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent=`You are paying with Paypal`;
        }
    else{
        paymentresult.textContent=`Please select a valid payment method`;
    }
}
