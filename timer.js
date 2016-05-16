$(document).ready(function() {

            function beginTimer(count) {
                var totaltime = $("#time-input").val() || 60;
                console.log("time", totaltime);
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
                var count = totaltime;
                myCounter = setInterval(function() {
                    count -= 1;
                    $('#time').html(count);
                    update(count);
                    if (count == totaltime) clearInterval(
                        myCounter);
                }, 1000);
            }
            $("#stop-timer-button").on("click", function() {
                event.preventDefault();
                clearInterval(myCounter);
            });
            $('#start-timer-button').on('click', function() {
                event.preventDefault();
                beginTimer();
                console.log();
            })
            $('#resume-timer-button').on('click', function () {
              event.preventDefault();
              var count = parseInt($('#time').text());
              console.log('count =', count);
              beginTimer(count);
            })
});
