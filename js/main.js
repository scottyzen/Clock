window.setInterval(function(){
  var time = new Date();
  var seconds = (time.getSeconds()<10?'0':'') + time.getSeconds();
  var minutes = (time.getMinutes()<10?'0':'') + time.getMinutes();
  var hours = (time.getHours()<10?'0':'') + time.getHours();
  var twelveHourClock = $('input[name="time"]:checked').val();
  var blinking = $('input[name="blinking"]:checked').val();
  var sh = seconds * 1.69491525424 + '%';
  var ampm = (hours > 12) ? 'PM' : 'AM';

  if(twelveHourClock == '12h'){
    if(hours <= 12){
      if(hours == '00'){hours = 12;}
      $('.clock').html('<h1>'+hours+"</h1><h1>:</h1><h1> "+minutes+' </h1><h1> '+ ampm+'</h1>');
    }else{
      hours -= 12;
      $('.clock').html('<h1>'+hours+"</h1><h1>:</h1><h1> "+minutes+' </h1><h1> '+ ampm+'</h1>');
    }
  }
  else {
    $('.clock').html('<h1>'+hours+"</h1><h1>:</h1><h1> "+minutes+' </h1>');
  }

  // Seconds Bar at Top
  $('.second-hand-bar').css({
    'width': sh
  });

  //Blinking settings
  if(blinking == 'OFF'){
    $('h1:nth-child(2)').css({
      'animation': 'none'
    });
  }

}, 1000);

//Settings window
$('#settings-button').on('click', function(){
  $('.settings').toggleClass('show');
  $('body').toggleClass('darken');
});

// Hide curser if idle
(function() {
    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        document.body.style.cursor = "none";
        cursorVisible = false;
    }

    document.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            document.body.style.cursor = "default";
            cursorVisible = true;
        }
        mouseTimer = window.setTimeout(disappearCursor, 5000);
    };
})();
