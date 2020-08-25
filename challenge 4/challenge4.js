//**** Display first item in an array ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", display);
    document.getElementById("reset").addEventListener("click", reset);
}

function display(){
    let items= document.getElementById("array").value;
    let item= items.split(',');
    let result=item[0];
    let resultdisplay="<div class='alert alert-success' role='alert'>"+" The first item is " +result+"</div>";
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("array").value='';
    document.getElementById("results").innerHTML="";
}
