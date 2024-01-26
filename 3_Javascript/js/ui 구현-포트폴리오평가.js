const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const number = document.querySelectorAll(".number");
const input = document.querySelector("#input");
const phone = document.querySelector("#phone");
// const num1 = document.querySelector("#1");
// const num2 = document.querySelector("#2");
// const num3 = document.querySelector("#3");
// const num4 = document.querySelector("#4");
// const num5 = document.querySelector("#5");
// const num6 = document.querySelector("#6");
// const num7 = document.querySelector("#7");
// const num8 = document.querySelector("#8");
// const num9 = document.querySelector("#9");
// const numsh = document.querySelector("##");
// const num0 = document.querySelector("#0");
// const numst = document.querySelector("#*");

// add.addEventListener("click", () => {

//     const
// })

document.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.id == "1") {
        console.log("1");
        input.appendChild(document.createTextNode("1"));
    }
    if (e.target.id == "2") {
        console.log("2");
        input.appendChild(document.createTextNode("2"));
    }
    if (e.target.id == "3") {
        console.log("3");
        input.appendChild(document.createTextNode("3"));
    }
    if (e.target.id == "4") {
        console.log("4");
        input.appendChild(document.createTextNode("4"));
    }
    if (e.target.id == "5") {
        console.log("5");
        input.appendChild(document.createTextNode("5"));
    }
    if (e.target.id == "6") {
        console.log("6");
        input.appendChild(document.createTextNode("6"));
    }
    if (e.target.id == "7") {
        console.log("7");
        input.appendChild(document.createTextNode("7"));
    }
    if (e.target.id == "8") {
        console.log("8");
        input.appendChild(document.createTextNode("8"));
    }
    if (e.target.id == "9") {
        console.log("9");
        input.appendChild(document.createTextNode("9"));
    }
    if (e.target.id == "0") {
        console.log("0");
        input.appendChild(document.createTextNode("0"));
    }
    console.log(input);
});

add.addEventListener("click", () => {
    console.log(input.childNodes);
    console.log(input.childNodes[1]);

    for (let i = 0; i < input.childNodes.length; i++) {
        phone.appendChild(
            document.createTextNode(input.childNodes[i].textContent)
        );
    }
    input.classList.remove(".number");
});
