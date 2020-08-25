//**** Sum of two numbers ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", add);
    document.getElementById("reset").addEventListener("click", reset);
}

function add(){
    let num1= parseInt(document.getElementById("num1").value);
    let num2= parseInt(document.getElementById("num2").value);
    let result = num1+num2;
    let resultdisplay="<div class='alert alert-success' role='alert'>"+ "The sum of "+ num1+ " and "+num2+" is " +result+"</div>";
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("results").innerHTML="";
}
