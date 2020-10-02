// 1. Take letters
// 2. Split into array
// 3. Translate each letter in array to morse code
// 4. join with spaces between letters

const alphabet = {  
  "0":"-----",
  "1":".----",
  "2":"..---",
  "3":"...--",
  "4":"....-",
  "5":".....",
  "6":"-....",
  "7":"--...",
  "8":"---..",
  "9":"----.",
  "a":".-",
  "b":"-...",
  "c":"-.-.",
  "d":"-..",
  "e":".",
  "f":"..-.",
  "g":"--.",
  "h":"....",
  "i":"..",
  "j":".---",
  "k":"-.-",
  "l":".-..",
  "m":"--",
  "n":"-.",
  "o":"---",
  "p":".--.",
  "q":"--.-",
  "r":".-.",
  "s":"...",
  "t":"-",
  "u":"..-",
  "v":"...-",
  "w":".--",
  "x":"-..-",
  "y":"-.--",
  "z":"--..",
  " ":"/",
  "!":"-·-·--",
  ".":"·-·-·-",
  ",":"--··--"
};

var morse = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "/": " ",
  "-·-·--": "!",
  "·-·-·-": ".",
  "--··--": ",",
};

class translator {
  constructor(alphabet, morse) {
    this.alphabet = alphabet;
    this.morse = morse;
    this.message = "";
    this.translatedMessage = "";
  }

  translateMorse() {
    let message = document.getElementById("input");
    let inputText = message.value.toLowerCase();
    if (inputText.length === 0) {
        document.getElementById("output").innerHTML =
          "Please write a message to translate";
    } else {
      // Split the message into an array
      let input_array = inputText.split("");
      // Map the input array onto the output array but making sure to convert on the way
      let output_array = input_array.map((letter) => convert(letter));
      output_array = output_array.join(" ");
      document.getElementById("output").innerHTML = output_array;

      function convert(letter) {
        // 1. For each letter, return the output of this.alphabet."letter"
        return alphabet[letter];
      }
    }
  }

  translateEnglish() {
    let message = document.getElementById("input");
    let inputText = message.value;
    if (inputText.length === 0) {
        document.getElementById("output").innerHTML =
          "Please write a message to translate";
    } else {
      // Split the message into an array of individual letters based on spaces
      let input_array = inputText.split(" ");
      console.log(input_array);
      // Map the input array onto the output array but making sure to convert on the way
      let output_array = input_array.map((letter) => convert(letter));
      output_array = output_array.join("");
      document.getElementById("output").innerHTML = output_array;

      function convert(letter) {
        // 1. For each letter, return the output of this.alphabet."letter"
        return morse[letter];
      }
    }
  }
}

    const app = new translator(alphabet);