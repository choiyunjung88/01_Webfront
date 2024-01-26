// 요소.remove() : 요소제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언
const addBtn = document.querySelector("#add"); // 추가 버튼
const calcBtn = document.querySelector("#calc"); // 계산 버튼

const container = document.querySelector(".container"); // 최종적으로 동적으로 만들어진 요소를 붙여야 하는 요소

// 추가 버튼 클릭시
addBtn.addEventListener("click", () => {
    // 1. div 요소 생성하기
    const row = document.querySelector(".row"); // <div></div>

    // 2. 요소에 class 추가하기
    row.classList.add("row"); // <div class="row"></div>

    // 3. input 요소 생성하기
    const input = document.createElement("input"); // <input>

    // 4. type="number" 추가하기
    // input.type = "number";
    input.setAttribute("type", "number"); // <input type="number">

    // 5. 클래스 "input-number" 추가하기
    input.classList.add("input-number");

    // 6. span 요소 생성하기
    const span = document.createElement("span"); //<span></span>

    // 7. span  태그에 클래스 "remove-row" 추가

    // const box = document.createElement("div");
    // console.log(box);
    // box.classList.add("row");
    // container.append(box);
    // const input = document.createElement("input");
    // input.type = "number";
    // console.log(input);
    // input.classList.add("input-number");
    // row.append(input);
});

// document.querySelector("#calc").addEventListener("click", () => {

// })
calcBtn.addEventListener("click", () => {
    // 1) 모든 .input-number 얻어오기
    const numbers = document.querySelectorAll(".input-number");

    // 2) for문으로 모든 요소 접근하여
    //      작성된 값(value) 얻어와
    //      숫자로 변경(Number())한 후
    //      합계 저장 변수 sum에 누적

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    }

    // 3) for문 끝나면 alert로 결과 출력
    alert("결과 : " + sum);
});
