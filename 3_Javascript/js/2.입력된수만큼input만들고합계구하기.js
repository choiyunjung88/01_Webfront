const btn = document.getElementById("btn");
const sumBtn = document.getElementById("sumBtn");
const result = document.getElementById("result");
const container = document.getElementById("container");
const count = document.getElementById("count");
console.log(count.outerText);
btn.addEventListener("click", () => {
    for (let i = 0; i < count.value; i++) {
        const input = document.createElement("input");
        container.setAttribute("type", "number");
        input.classList.add("input-number");
    }
});
