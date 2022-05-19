var sheet = document.createElement('style'),
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';

      if(curVal==1){
        document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 -5 0 314.25 450');
        document.getElementById("numeroconcerti").innerHTML = "182";
     }else if (curVal==2){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 42 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "101";
    }else if (curVal==3){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 90 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "222";
    }else if (curVal==4){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 138 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "85";
    }else if (curVal==5){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 187 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "62";
    }else if (curVal==6){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 235 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "71";
    }else if (curVal==7){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 284 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "62";
    }else if (curVal==8){
      document.getElementById('polygon1').setAttribute('points', '314.25 450 0 450 330 0 314.25 450');
      document.getElementById("numeroconcerti").innerHTML = "35";
    }



  // Set active label
  $('.range-labels li').removeClass('active selected');

  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');


  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger('input');

});
