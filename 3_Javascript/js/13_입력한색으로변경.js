const input = document.getElementsByClassName("color-input");
const box = document.getElementsByClassName("box");
const btn = document.querySelector("#changeButton");
console.log(input);
console.log(box);
console.log(btn);

/*btn.addEventListener("click", function () {
    box[0].style.backgroundColor = input[0].value;
    box[1].style.backgroundColor = input[1].value;
    box[2].style.backgroundColor = input[2].value;
    box[3].style.backgroundColor = input[3].value;
    box[4].style.backgroundColor = input[4].value;
});*/
btn.addEventListener("click", function () {
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = input[i].value;
    }
});

/*

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function() {

    for(let i=0; i<boxList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});
*/
