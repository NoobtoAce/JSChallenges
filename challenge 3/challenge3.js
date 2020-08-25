//**** Conversion of Age to seconds ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", convertAgeToSeconds);
    document.getElementById("reset").addEventListener("click", reset);
}

function convertAgeToSeconds(){
    let age= parseInt(document.getElementById("age").value);
    let result = age*365.25*24*60*60;
    let resultdisplay="<div class='alert alert-success' role='alert'>"+ age +" years is " +result+ " Seconds"+"</div>";
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("age").value='';
    document.getElementById("results").innerHTML="";
}
