const number = document.querySelector(".number");
const result = document.querySelector("#result");
const container = document.getElementsByClassName("number");
const regExp = new RegExp(".");
const reset = document.querySelector("#reset");
console.log(number);
container[0].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[1].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[2].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[3].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[4].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[5].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[6].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[7].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[8].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
container[9].addEventListener("click", (e) => {
    console.log(regExp.test(e.target.outerText));
    if (regExp.test(e.target.outerText)) {
        result.append(e.target.outerText);
    }
});
if (result.outerText > 10) {
    result.style.undisplay;
}
reset.addEventListener("click", () => {
    result.innerHTML("");
});
