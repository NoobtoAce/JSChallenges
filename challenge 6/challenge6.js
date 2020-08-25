//**** String check whether it is empty ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", Stringcheck);
    document.getElementById("reset").addEventListener("click", reset);
}

function Stringcheck(){
    let string= document.getElementById("string").value;
    let resultdisplay;
    if( string==''){
        resultdisplay="<div class='alert alert-success' role='alert'>"+" The string is empty"+"</div>";
    }
    else{
        resultdisplay="<div class='alert alert-danger' role='alert'>"+" The string is not empty "+"</div>";
    }
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("string").value='';
    document.getElementById("results").innerHTML="";
}
