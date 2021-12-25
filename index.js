function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

btn1 = document.getElementById("button1");
console.log(btn1);
btn1.addEventListener("click", onButtonClick);

console.log("Hallo");

function onButtonClick() {
  let output = randomChoice(words);
  document.getElementById("output").innerText = output;
  console.log(output);
}
