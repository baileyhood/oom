$(document).ready(function() {
            function beginTimer() {
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
                var count = 0
                myCounter = setInterval(function() {
                    count += 1;
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
                console.log(count);
            })
            $('#submit-time-button').on('click', function () {

            })
});
