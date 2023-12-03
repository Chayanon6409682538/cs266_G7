function initializeGame() {
    var emojiset = document.getElementById('emojiset').value.split(' ');
    var cols = document.getElementById('cols');
    var rows = document.getElementById('rows');
    var bombs = document.getElementById('bombs');
    cols.value = 10;
    rows.value = 10;
    bombs.value = 10;

    game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked);
  
    document.querySelector('.js-new-game').addEventListener('click', restart);
    document.querySelector('.js-popup-new-game').addEventListener('click', restart);
  
    document.querySelector('.button-3minute').addEventListener('click', Button3minuteClick);
    document.querySelector('.button-7minute').addEventListener('click', Button7minuteClick);
    document.querySelector('.button-15minute').addEventListener('click', Button15minuteClick);
   
    document.querySelector('.js-settings').addEventListener('click', settingsClick);
  }
  function Button3minuteClick() {
    clearInterval(game.timer);
    //var Game = require('./game.js')
    emojiset = document.getElementById('emojiset').value.split(' ');
    const cols = 10;
    const rows = 10;
    const bombs = 10;
    const countdownDuration = 180;
    game = new Game(cols, rows, bombs, emojiset, document.getElementById('twemoji').checked);
    game.startCountdown(countdownDuration);
    document.querySelector('.js-settings-popup1').classList.remove('show'); 
  }
  
  function Button7minuteClick() {
    clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    const cols = 10;
    const rows = 10;
    const bombs = 10;
    const countdownDuration = 420;
    game = new Game(cols, rows, bombs, emojiset, document.getElementById('twemoji').checked);
    game.startCountdown(countdownDuration);
    document.querySelector('.js-settings-popup1').classList.remove('show');
  }
  
  function Button15minuteClick() {
    clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    const cols = 10;
    const rows = 10;
    const bombs = 10;
    const countdownDuration = 900 ;
    game = new Game(cols, rows, bombs, emojiset, document.getElementById('twemoji').checked);
    game.startCountdown(countdownDuration);
    document.querySelector('.js-settings-popup1').classList.remove('show');
  }
  
  function settingsClick() {
    var listPopup1 = document.querySelector('.js-settings-popup1').classList;
    console.log(listPopup1.contains('show'));
    listPopup1.contains('show') ? listPopup1.remove('show') : listPopup1.add('show');
    this.setAttribute('aria-expanded', listPopup1.contains('show'));
  
    var listPopup = document.querySelector('.js-settings-popup').classList;
    if (listPopup.contains('show')) {
      listPopup.remove('show');
    }
  }
  
  function restart() {
    clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked);
    document.querySelector('.js-settings-popup').classList.remove('show');
    return false;
  }
  
  // เรียกใช้ฟังก์ชัน initializeGame เมื่อโหลดหน้าเว็บ
  document.addEventListener('DOMContentLoaded', initializeGame);

  
  