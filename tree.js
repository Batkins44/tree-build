var height = 0
var charac = ""
var row = ""
var c = ""
var button = document.getElementById("height-btn");
var place = document.getElementById("place")



function heightInput(){
    return document.getElementById("height").value;
}
function charInput(){
    return document.getElementById("char").value;
}


function tree(){
    height = heightInput();
    console.log("height:", height);
    charac = charInput();
    console.log("character:", charac);
    row = charac
    for(i=0;i<height;i++){
        
        c = charac
        place.innerHTML += `<center>${row}<br></center>`
        console.log(c)
        row +=c
    }
}


function test(){
    console.log("It works bitch");
    console.log(heightInput());
    console.log(charInput());
}
button.addEventListener("click", tree);