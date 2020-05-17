var navElements = document.querySelectorAll(".drum");
for (var i = 0; i < navElements.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()  //anonymous function
  {
    // var mySound = new Audio('sounds/tom-1.mp3');
    // mySound.play();
    //console.log(this.innerText);
    //this.style.color='Red';
    keyboardAnimation(this.innerHTML);
    switch (this.innerHTML) {
      case 'w':
        var mysound = new Audio("sounds/crash.mp3");
        mysound.play();
        break;

      case 'a':
        var mysound = new Audio("sounds/kick-bass.mp3");
        mysound.play();
        break;

      case 's':
        var mysound = new Audio("sounds/snare.mp3");
        mysound.play();
        break;

      case 'd':
        var mysound = new Audio("sounds/tom-1.mp3");
        mysound.play();
        break;

      case 'j':
        var mysound = new Audio("sounds/tom-2.mp3");
        mysound.play();
        break;

      case 'k':
        var mysound = new Audio("sounds/tom-3.mp3");
        mysound.play();
        break;

      case 'l':
        var mysound = new Audio("sounds/tom-4.mp3");
        mysound.play();
        break;

      default:
        console.log(this.innerHTML);
    }
  });
}



var count=0;
var supriseSet=[];
var targetset=['l','k','j','l','k','j','s','d','w','s','d','w'];
document.addEventListener("keypress", keyNote); //Non-anonymous fuction

function keyNote(event) {
 //console.log(event);
//  console.log(event.key);
  supriseSet.push(event.key);
//  console.log(supriseSet);
  count ++;
  keyboardAnimation(event.key);
  switch (event.key) {

    case 'w':
      var mysound = new Audio("sounds/crash.mp3");
      mysound.play();
      break;

      case 'a':
      var mysound = new Audio("sounds/kick-bass.mp3");
      mysound.play();
      break;


      case 's':
        var mysound = new Audio("sounds/snare.mp3");
        mysound.play();
        break;

      case 'd':
        var mysound = new Audio("sounds/tom-1.mp3");
        mysound.play();
        break;

      case 'j':
        var mysound = new Audio("sounds/tom-2.mp3");
        mysound.play();
        break;

      case 'k':
        var mysound = new Audio("sounds/tom-3.mp3");
        mysound.play();
        break;

      case 'l':
        var mysound = new Audio("sounds/tom-4.mp3");
        mysound.play();
        break;

       default:
        alert('Invalid Key');

  }
  if (count === 150)
  {
    alert("Donga 150 beats ofoo, Kummeyi Enjoy Chestunava");
  }
  if(JSON.stringify(supriseSet)==JSON.stringify(targetset))
  {
   alert("Bujjigaaa I Love You");
  }
}

function keyboardAnimation(currentkey){
 var currentkeyValue = document.querySelector("."+currentkey);
 currentkeyValue.classList.add("pressed");
 setTimeout(function()
 {
   currentkeyValue.classList.remove("pressed");
 }, 100)
}
