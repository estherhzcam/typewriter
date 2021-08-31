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
      console.log(text[iterator-1])
      currentCharacter = text[iterator-1] 
      let currentText = document.querySelector("#typewriter").textContent
    let newText = currentText + currentCharacter
    document.querySelector("#typewriter").textContent = newText
        
      setTimeout(loop, 200)
     }
  else if (maxnumber < iterator) {
console.log("the end")
  }
}
