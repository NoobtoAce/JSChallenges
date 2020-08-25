//****Operations with numbers in an array ****

window.onload = function() {
    document.getElementById("submit-smallestnumber").addEventListener("click", smallestnumber);
    document.getElementById("submit-biggestnumber").addEventListener("click", biggestnumber);
    document.getElementById("submit-descending").addEventListener("click", descending);
    document.getElementById("reset").addEventListener("click", reset);
}

function display(result,text){
    let resultdisplay="<div class='alert alert-success' role='alert'>"+text+result+"</div>";
    document.getElementById("results").innerHTML =resultdisplay;
}

function sortArray(){
    let items= document.getElementById("array").value;
    let item= items.split(',');
    item.sort((a,b)=>a-b);
    return item;
}

function smallestnumber(){
    let item= sortArray();
    let result=item[0];
    let text='The smallest number is ';
    display(result,text);
}

function biggestnumber(){
    let item= sortArray();
    let result=item[item.length-1];
    let text='The largest number is ';
    display(result,text);
}

function descending(){
    let item= sortArray();
    item=item.reverse();
    let result=item.join(',');
    let text='The decendingly sorted array is ';
    display(result,text);
}

function reset(){
    document.getElementById("array").value='';
    document.getElementById("results").innerHTML="";
}
