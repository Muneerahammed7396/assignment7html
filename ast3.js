const amountinput=document.getElementById("amount");
const tipinput=document.getElementById("tip");
const calbtn=document.getElementById("caluclate");
const billamount=document.getElementById("billamount");


calbtn.addEventListener('click',function(){
    billamount.textContent= Number(amountinput.value)+Number(tipinput.value)
     
    
});