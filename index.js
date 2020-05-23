//aptrinsic code
<!-- Aptrinsic Tag-->
  <script type="text/javascript">
  (function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-XTICVJH7WFCI-2");
</script>
<!-- End Aptrinsic Tag-->

//Identity code
//passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": "shan0130", // Required for logged in app users
    "email": "shan0130@address.com",
    "firstName": "shan",
    "lastName": "test",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"Drum1234", //Required
    "name":"Drum",
    "Program": "Platinum" // flat custom attributes
 });

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
