/*
for(let num = 1; num <= 5; num++) {
    조건 식이 true 인 경우 반복수행할 코드;
    consolel.log("xhdrhk!")

}*/
function check1() {
    let result = ""; // 빈문자열
    for (let num = 1; num <= 5; num++) {
        console.log(num);
        result += num;
        //result = result + num;
        // 1=+1;
        //12 = 1 +2
        //23]
    }
}

function check2() {
    //1부터 10까지 1씩 증가하며 출력
    for (let num = 1; num <= 10; num++) {
        console.log(num);
    }
}

function check3() {
    for (let num = 1; num <= 20; num++) {
        console.log(num);
    }
}
function check4() {
    for (let num = 5; num <= 15; num++) {
        console.log(num);
    }
}
function check5() {
    for (let num = 1; num <= 30; num += 2) {
        console.log(num);
    }
}
function check6() {
    let count = 0;
    for (let num = 1; num <= 10; num++) {
        count += num;
    }
    console.log(count);
}

//-------------------------
function sumFn() {
    const input1 = document.getElementById("inputNumber1-1");
    const input2 = document.getElementById("inputNumber1-2");
    const result1 = document.getElementById("result1");
    let count = 0;
    for (let num = Number(input1.value); num <= Number(input2.value); num++) {
        count += num;
    }
    result1.innerText = count;
}

//-------------------------------------------------------------
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul 태그
    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제
    // start 부터 end까지 val씩 증가
    for (let num = start; num <= end; num += val) {
        ul.innerHTML += `<li>${num}</li>`;
    }
}

// 요소.innerText = `<li>$num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}<li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력

//------------------------------------------------------
function executeFn3() {
    const input = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");
    ul.innerHTML = "";
    for (let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${input} X ${num} = ${input * num}`;
    }
}
