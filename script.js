function changeText() {
  document.getElementById("title").innerText = "Text Changed!";
}
let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}

