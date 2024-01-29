const btn = document.querySelector("#apply");
const hello = document.querySelector("#hello");
const back = document.querySelector("#back");
const text = document.querySelector("#text");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const fontsize = document.querySelector("#fontsize");
const usual = document.querySelector("#usual");
const bold = document.querySelector("#bold");
const fontcolor = document.querySelector("#fontcolor");
const left = document.querySelector("#left");
const center = document.querySelector("#center");
const right = document.querySelector("#right");
const up = document.querySelector("#up");
const middle = document.querySelector("#middle");
const down = document.querySelector("#down");
const box = document.querySelector("#box");
btn.addEventListener("click", () => {
    console.log(btn);
    console.log(hello);
    console.log(back);
    console.log(text);
    console.log(bold.checked);
    console.log(`${width.value}px`);
    console.log(hello.float);
    hello.style.backgroundColor = back.value;
    hello.innerText = text.value;
    if (bold.checked == true) {
        hello.style.fontWeight = "bold";
    }
    if (usual.checked == true) {
        hello.style.fontWeight = "normal";
    }
    hello.style.width = `${width.value}px`;
    hello.style.height = `${height.value}px`;
    hello.style.fontSize = `${fontsize.value}px`;
    hello.style.color = fontcolor.value;
    if (right.checked == true) {
        box.style.textAlign = "right";
    }
    if (center.checked == true) {
        box.style.textAlign = "center";
    }
    if (left.checked == true) {
        box.style.textAlign = "left";
    }
    if (up.checked == true) {
        box.style.verticalAlign = "textTop";
    }
    if (middle.checked == true) {
        box.style.verticalAlign = "middle";
    }
    if (down.checked == true) {
        box.style.verticalAlign = "testBottom";
    }
});

bold.addEventListener("click", () => {
    usual.checked = false;
});
usual.addEventListener("click", () => {
    bold.checked = false;
});
left.addEventListener("click", () => {
    center.checked = false;
    right.checked = false;
});
center.addEventListener("click", () => {
    left.checked = false;
    right.checked = false;
});
right.addEventListener("click", () => {
    center.checked = false;
    left.checked = false;
});
up.addEventListener("click", () => {
    middle.checked = false;
    down.checked = false;
});
middle.addEventListener("click", () => {
    up.checked = false;
    down.checked = false;
});
down.addEventListener("click", () => {
    middle.checked = false;
    up.checked = false;
});
