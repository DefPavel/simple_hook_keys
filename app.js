const ioHook = require('iohook');
const StringBuilder = require('node-stringbuilder');

let element = '';
let decoded = '';

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
    
    sb.replaceAll("7572", "fak");
    /*sb.replace("49", "1");
    sb.replace("50", "2");
    sb.replace("51", "3");
    sb.replace("52", "4");
    sb.replace("53", "5");
    sb.replace("54", "6");
    sb.replace("55", "7");
    sb.replace("56", "8");
    sb.replace("57", "9");
    */
   return sb.toString().trim();
}

ioHook.on('keydown', key => {

  if(key.keycode >= 71 && key.keycode <= 82) {

    element += key.keycode;
    for (let index = 0; index < element.length; index ++) {

      console.log(element[index].substring(index , 2));
      //element += ReplaceData(key.keycode.substring(2));  
    }
    
    /*for (let index = 0; index < element.length; index ++) {
      console.log("ttt :" + element[index]); 
      decoded += ReplaceData(element[index].substring(index, 2));
    }
    */
  
    /*if(element.length === 20) {

      // Обрезаем 000
      for (let index = 6; index < element.length; index += 2) {
        const test = element[index];

        console.log(test);
        //decoded += ReplaceCode(textBox1.Text.Substring(i, 4));

      }
    }
    */
  } 
  //console.log(element);
    
})

ioHook.start();