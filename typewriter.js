"use strict";

let text = document.querySelector("#typewriter").textContent
let maxnumber = text.length;
let iterator;
let currentCharacter;

document.querySelector("#typewriter").textContent = ""

init() 

function init () {
    console.log("init")
    iterator = 0
    loop()
}

function loop() {
  iterator++;
  console.log("loop");
  if (maxnumber >= iterator) {
      currentCharacter = text[iterator-1] 
    let currentText = document.querySelector("#typewriter").textContent
    let newText = currentText + currentCharacter
   /*  if (currentCharacter == " ") {
        document.querySelector()
    }
    else {

    } */
    /* <audio id="typekey1" src="typekey1.mp3"></audio>
        <audio id="typekey2" src="typekey2.mp3"></audio>
        <audio id="typespace" src="typespace.mp3"></audio> */
    document.querySelector("#typewriter").textContent = newText
      setTimeout(loop, 200)
     }

}
