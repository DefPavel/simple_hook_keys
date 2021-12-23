const ioHook = require('iohook');
const StringBuilder = require('node-stringbuilder');

let element = '';
let decoded = '';

ioHook.on('keydown', key => {
  
  /*if(key.keycode >= 71 && key.keycode <= 82) {
  // Выбираем диапазон только Numpad
    //element += key.keycode;

    console.log(key.keycode);
      // Записываем до
      if(element.length === 30) {
        // Проходимся по записанному элементу
        for (let index = 12; index < element.length; index += 4) {
          //console.log("element :" + element.substring(index, 2)); 
          decoded += ReplaceData(element.substring(index, 4));
        }   
      }
      
      
  }*/
  console.log(key.keycode);
});

function ReplaceData(params) {
  /* Код Numpud :
   71 - Num7
   72 - Num8
   73 - Num9
   75 - Num4
   76 - Num5
   79 - Num1
   80 - Num2
   81 - Num3
   82 - Num0
*/
  const sb = new StringBuilder(params);
  sb.replaceAll("7572", "0");
  /*sb.replaceAll("7375", "1");
  sb.replaceAll("7675", "2");
  */

  return sb.toString().trim();
}

ioHook.start();
