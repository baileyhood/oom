$(document).ready(function() {
  timer.init();
});

var timer = {
  min: 25,
  sec: 0,
  // timer: "",
  timeMeditated: 0,

  init: function () {
    timer.setInHTML();
    timer.getSetTime();
  },
  add: function () {
    timer.min++;
    timer.setInHTML();
    timer.getSetTime();
  },
  reduce: function () {
    if (timer.min > 0) { //can't go lower than 0
        timer.min--;
        timer.setInHTML();
        timer.getSetTime();
    }
  },
  start: function () {
    $('#message').html(""); //no message b/c timer is still running
    if (timer.min === 0 && timer.sec === 0) { //adding message once timer is finished
        $('#message').html(
            "Your session has finished! You meditated for " + timer.timeMeditated +
            " minutes");
        return;
    }
    if (timer.sec === 0) { //reducing minute count once seconds reach 0 (i.e. one minute has passed)
        --timer.min;
        timer.sec = 59;
    } else {
        --timer.sec;
    }
    timer.setInHTML();
    timer.timer = setTimeout('timer.start()', 1000);
  },
  pause: function () {
    clearTimeout(timer.timer);
  },
  reset: function () {
    timer.min = 25;
    timer.sec = 0;
    clearTimeout(timer.timer);
    timer.setInHTML();
    $('#message').html (""); //adding text in DOM
  },
  setInHTML: function () {
    if (timer.min < 10) {
        $('#min').html("0" + timer.min);
    } else {
        $('#min').html(timer.min);
    }
    if (timer.sec < 10) {
        $('#sec').html("0" + timer.sec);
    } else {
        $('#sec').html(timer.sec);
    }
  },
  getSetTime: function () {
    timer.timeMeditated = $('#min').html();
    $('#session-length').html(timer.timeMeditated + " minutes");
    return timer.timeMeditated;
  }
}
