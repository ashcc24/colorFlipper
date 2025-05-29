const body=document.getElementsByTagName("body")[0] //it returns an array so we have to specify [0] even tho it's the only one in arr

function setcolor(name){
    body.style.backgroundColor = name;
}

function randomc(){
    //to generate a random colour use rgb value numbers
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    colour=`rgb(${red},${green},${blue})`;
    body.style.backgroundColor = colour;

}
