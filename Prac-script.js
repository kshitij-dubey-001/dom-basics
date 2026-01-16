
const input = document.getElementById("nameInput");
const showBtn = document.getElementById("showBtn");
const output = document.getElementById("output");
const colorBtn = document.getElementById("colorBtn");
const title = document.getElementById("title");

showBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    output.textContent = "Please enter your name.";
  } else {
    output.textContent = `Hello, ${input.value}!`;
  }
});

colorBtn.addEventListener("click", () => {
  title.style.color =
    title.style.color === "blue" ? "black" : "blue";
});
      
