'use strict';
const ioHook = require('iohook');
let element = '';
//const arrayElemet = [];
ioHook.on('keydown', key => {
  /*
    Вообще нужен Numpad - но у меня его нет =))
    Поэтому накидаю пример просто на обычных цифрах
  */
  /*
    Код цифры :  
    1 = 2;
    2 = 3;
    3 = 4;
    4 = 5;
    5 = 6;
    6 = 7;
    7 = 8;
    8 = 9;
    9 = 10;
    0 = 11;
  */
  
  if(key.keycode >= 2 && key.keycode <= 11) {

    element += key.keycode;
    if(element.length == 8) {
      console.log(element);
      // Кодинг
    }
    /*arrayElemet.push(key.keycode);
    if(arrayElemet.length == 8) {
      //Кодинг
      console.log(arrayElemet);
    }
    */
  }
    
})

ioHook.start();