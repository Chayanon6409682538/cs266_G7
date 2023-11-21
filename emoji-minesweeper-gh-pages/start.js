
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
  
    document.querySelector('.button-easy').addEventListener('click', easyButtonClick);
    document.querySelector('.button-normal').addEventListener('click', normalButtonClick);
    document.querySelector('.button-hard').addEventListener('click', hardButtonClick);
    document.querySelector('.button-custom').addEventListener('click', customButtonClick);
  
    document.querySelector('.js-settings').addEventListener('click', settingsClick);
  }
  function easyButtonClick() {
   // clearInterval(game.timer);
    //var Game = require('./game.js')
    emojiset = document.getElementById('emojiset').value.split(' ');
    console.log(emojiset);
    const cols = 8;
    const rows = 10;
    const bombs = 10;
    game = new Game(cols, rows, bombs, emojiset, document.getElementById('twemoji').checked);
    document.querySelector('.js-settings-popup1').classList.remove('show'); 
    return true;
    
  }
  
  function normalButtonClick() {
    //clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    game = new Game(14, 18, 40, emojiset, document.getElementById('twemoji').checked);
    document.querySelector('.js-settings-popup1').classList.remove('show');
  }
  
  function hardButtonClick() {
    //clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    game = new Game(20, 24, 99, emojiset, document.getElementById('twemoji').checked);
    document.querySelector('.js-settings-popup1').classList.remove('show');
  }
  
  function customButtonClick() {
    var listPopup1 = document.querySelector('.js-settings-popup1').classList;
    var listPopup = document.querySelector('.js-settings-popup').classList;
  
    console.log(listPopup1.contains('show'));
  
    listPopup1.contains('show') ? listPopup1.remove('show') : listPopup1.add('show');
    listPopup.contains('show') ? listPopup.remove('show') : listPopup.add('show');
  
    this.setAttribute('aria-expanded', !listPopup1.contains('show'));
    return false;
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
    //clearInterval(game.timer);
    emojiset = document.getElementById('emojiset').value.split(' ');
    game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked);
    document.querySelector('.js-settings-popup').classList.remove('show');
    return false;
  }
  
  // เรียกใช้ฟังก์ชัน initializeGame เมื่อโหลดหน้าเว็บ
  document.addEventListener('DOMContentLoaded', initializeGame);

  module.exports=easyButtonClick;
  