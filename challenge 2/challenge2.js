//**** Conversion of minutes to seconds ****

window.onload = function() {
    document.getElementById("submit").addEventListener("click", convertMinutesToSeconds);
    document.getElementById("reset").addEventListener("click", reset);
}

function convertMinutesToSeconds(){
    let minutes= parseInt(document.getElementById("minute").value);
    let result = minutes*60;
    let resultdisplay="<div class='alert alert-success' role='alert'>"+ minutes +" minutes is " +result+ " Seconds"+"</div>";
    document.getElementById("results").innerHTML =resultdisplay;
}

function reset(){
    document.getElementById("minute").value='';
    document.getElementById("results").innerHTML="";
}
