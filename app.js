const ioHook = require('iohook');
const StringBuilder = require('node-stringbuilder');

let element = '';
let decoded = '';

ioHook.on('keydown', key => {
  // Выбираем диапазон только Numpad
  if(key.keycode >= 71 && key.keycode <= 82) {
    //Записываем весь объект
    element += key.keycode;

    if(element.length === 40) {
      // Пропускаем первые три символа 000
       for (let index = 12; index < element.length; index += 4) {
        // Заменяем на адекватный номер пропуска
        decoded += ReplaceData(element.substr(index, 4));
        //console.log(element.substr(index, 4));
       }
       console.log('CARD-ID:' + decoded);
       
       /* 
          Делаем какие-то манипуляции с CARD-ID
       */


       // Очищаем элемент
       element = '';
       decoded = '';
    }
  }
});

function ReplaceData(params) {

  const sb = new StringBuilder(params);
  sb.replaceAll('7572', '0'); 
  sb.replaceAll('7573', '1');
  sb.replaceAll('7682', '2');
  sb.replaceAll('7679', '3');
  sb.replaceAll('7680', '4');
  sb.replaceAll('7681', '5'); 
  sb.replaceAll('7675', '6');
  sb.replaceAll('7676', '7');
  sb.replaceAll('7677', '8');
  sb.replaceAll('7671', '9');
  return sb.toString().trim();
}

ioHook.start();
