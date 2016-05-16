$(document).ready(function() {
  var count = parseInt($('#time').text());
            function beginTimer(count) {
                var totaltime = 60;
                function update(percent) {
                    var deg;
                    if (percent < (totaltime / 2)) {
                        deg = 90 + (360 * percent / totaltime);
                        $('.pie').css('background-image',
                            'linear-gradient(' + deg +
                            'deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)'
                        );
                    } else if (percent >= (totaltime / 2)) {
                        deg = -90 + (360 * percent / totaltime);
                        $('.pie').css('background-image',
                            'linear-gradient(' + deg +
                            'deg, transparent 50%, #1fbba6 50%),linear-gradient(90deg, white 50%, transparent 50%)'
                        );
                    }
                }
                myCounter = setInterval(function() {
                    count += 1;
                    $('#time').html(count);
                    update(count);
                    if (count == totaltime) clearInterval(
                        myCounter);
                }, 1000);
                console.log("count in begin timer", count);
            }
            $("#stop-timer-button").on("click", function() {
                event.preventDefault();
                clearInterval(myCounter);
            });
            $('#start-timer-button').on('click', function() {
                event.preventDefault();
                beginTimer(count);
                console.log();
            })
            $('#resume-timer-button').on('click', function () {
              event.preventDefault();
              console.log('count =', count);
              beginTimer(count);
            })
});
