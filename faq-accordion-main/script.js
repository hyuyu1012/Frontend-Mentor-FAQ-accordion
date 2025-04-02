const plus_buttons = document.querySelectorAll('.plus');
const minus_buttons = document.querySelectorAll('.minus');  


plus_buttons.forEach(function(plus_button) {
  plus_button.addEventListener('click', function() {alert('plus_button이 출력되었습니다.')
  });
});

minus_buttons.forEach(function(minus_button){
  minus_button.addEventListener('click', function() {alert('minus_button이 출력되었습니다.')})
});

