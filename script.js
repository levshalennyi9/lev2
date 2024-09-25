function background() { 
  const body = document.body;
  body.style.backgroundColor = (body.style.backgroundColor === 'lightblue') ? 'white' : 'lightblue';
}

function color() {
  var boxes = document.querySelectorAll('.grid div');
  boxes.forEach(function(box) {
    box.style.backgroundColor = '#8B0000'; 
  });
}

var t = 5 * 60; // 5 минут в секундах

function timer() {
  var min = Math.floor(t / 60);
  var sec = t % 60;

  // Обновляем текст на экране
  document.getElementById('timer').textContent = min + ':' + (sec < 10 ? '0' : '') + sec;

  // Уменьшаем время
  if (t > 0) {
    t--;
  } else {
    clearInterval(timerInterval); // Останавливаем таймер, когда время вышло
  }
}

var timerInterval = setInterval(timer, 1000);

var footer = document.getElementById('footer'); // Исправлено ID
var tip = document.getElementById('tip');

footer.onmouseover = function() {
  tip.style.display = 'block';
  footer.classList.add('footer-active'); // Добавляем класс для анимации
}

footer.onmouseout = function() {
  tip.style.display = 'none';
  footer.classList.remove('footer-active'); // Удаляем класс для анимации
}

footer.onmousemove = function(event) {
  tip.style.left = event.pageX + 10 + 'px';
  tip.style.top = event.pageY + 10 + 'px';
}
