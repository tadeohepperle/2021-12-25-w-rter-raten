kleine Website die per click eins der 660 Substative aus dem Deutsch-A2 Wortschatz anzeigt.
Link: https://tadeohepperle.github.io/2021-12-25-w-rter-raten/



let e = document.getElementById("e");
function playE() {
  let audio = new Audio("sounds/E5.mp3");
  audio.play();
}
e.addEventListener("click", playE);
Für "f":

javascript
Copy code
let f = document.getElementById("f");
function playF() {
  let audio = new Audio("sounds/F5.mp3");
  audio.play();
}
f.addEventListener("click", playF);
Für "g":

javascript
Copy code
let g = document.getElementById("g");
function playG() {
  let audio = new Audio("sounds/G5.mp3");
  audio.play();
}
g.addEventListener("click", playG);
Für "h":

javascript
Copy code
let h = document.getElementById("h");
function playH() {
  let audio = new Audio("sounds/H5.mp3");
  audio.play();
}
h.addEventListener("click", playH);
Für "a":

javascript
Copy code
let a = document.getElementById("a");
function playA() {
  let audio = new Audio("sounds/A5.mp3");
  audio.play();
}
a.addEventListener("click", playA);
