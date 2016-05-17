var min = 25;
var sec = 0;
var timer;
setInHTML();

function add(){
  min++;
  setInHTML();
  getSetTime();
}
function reduce(){
  if (min > 0) { //can't go lower than 0
    min--;
    setInHTML();
    getSetTime();
  }
}

function start(){
  document.getElementById('message').innerHTML = ""; //no message b/c timer is still running
  if (min === 0 && sec === 0){ //adding message once timer is finished
     document.getElementById('message').innerHTML = "Your session has finished! You meditated for " + timeMeditated + " minutes";
    return;
  }
  if (sec === 0){ //reducing minute count once seconds reach 0 (i.e. one minute has passed)
    --min;
    sec = 59;
  } else {
    --sec;
  }

  setInHTML();

  timer = setTimeout('start()',1000);
}

function pause(){
  clearTimeout(timer);
}

function reset(){
  min = 25;
  sec = 0;
  clearTimeout(timer);
  setInHTML();
  document.getElementById('message').innerHTML = "";
}


//adding text in DOM
function setInHTML(){

  if (min < 10){
    document.getElementById('min').innerHTML = "0" + min;
  } else {
  document.getElementById('min').innerHTML = min;
  }
  if (sec < 10){
    document.getElementById('sec').innerHTML = "0" + sec;
  } else {
    document.getElementById('sec').innerHTML = sec;
  }
}

var timeMeditated = getSetTime();

function getSetTime () {
  var timeMeditated = document.getElementById('min').innerHTML;
  return timeMeditated;
  console.log("Set time: ", timeMeditated);
}
