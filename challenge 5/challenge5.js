//**** Display first item in an array ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", display);
    document.getElementById("reset").addEventListener("click", reset);
}

function display(){
    let rating= parseFloat(document.getElementById("rating").value);
    let resultdisplay;
    if(rating>=7){
         resultdisplay="<div class='alert alert-success' role='alert'>"+" The movie is good"+"</div>";
    }
    else if( rating<7){
         resultdisplay="<div class='alert alert-warning' role='alert'>"+" The movie is bad"+"</div>";
    }
    
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("rating").value='';
    document.getElementById("results").innerHTML="";
}
