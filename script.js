
var header=document.querySelector("a")

header
header.style.color='blue';
//the floor()method rounds
function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color='#';
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}
function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput ;
    head.style.color=colorInput;
}
setInterval("changeHeaderColor()",500);

var text = document.getElementById("c1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 60);

function onTick(){
  var span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }