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
function enterFunc(){

    if (event.which == 13 || event.keyCode == 13){
       
      
        tree();

    }

  }

function tree(){
    height = heightInput();
    charac = charInput();
    row = charac;
    c = charac;
    if(height === "" || charac === ""){
        alert("Bruh,put some text in there");
    } 
    for(i=0;i<height;i++){
        
        place.innerHTML += `<center>${row}<br></center>`
        row += (c+c)
    }
}


function test(){
}
button.addEventListener("click", tree);
addEventListener("keypress", enterFunc);