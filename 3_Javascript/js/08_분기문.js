// break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for (let i = 1; i <= 10; i++) {
        console.log("i : ", i);

        if (i == 5) break;
    }
}

// 무한 반복하는 while문 멈추기
function check2() {
    let i = 1;
    // 10 초과 시 멈춤
    while (true) {
        // true 일 때 반복 수행하는 코드
        console.log("i : ", i++);
        if (i > 10) break;
    }
}

// continue 확인하기
function check3() {
    // 1부터 20까지 출력, 단, 3의 배수는 건너뛰기
    for (let i = 1; i <= 20; i++) {
        // 3의 배수인 경우
        if (i % 3 == 0) continue;

        console.log("i : ", i);
    }
}
/* 1부터 30까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기
    */
function check4() {
    for (let i = 1; i <= 30; i++) {
        if (i % 2 == 1 || i % 10 == 0) continue;
        console.log("i :", i);
    }
}

/* 0~9까지 5줄 출력
    - 각 줄에서 4의 배수는 건너뛰기
    - 3번째 줄 출력 후 멈추기

    0123456789
    0123456789
    0123456789
*/
function check5() {
    for (let i = 1; i < 6; i++) {
        let num = "0";
        for (let x = 0; x < 10; x++) {
            if (x % 4 == 0) continue;
            num += x;
        }
        console.log(num);
        if (i == 3) break;
    }
}

function startGame() {
    rand = Math.floor(Math.random() * 100);
    input = prompt("1부터 100 사이 난수를 맞춰보세요");
    while (true) {
        if (rand == input) {
            alert("맞히셨습니다");
            break;
        }
        if (input == null) {
            alert("게임 취소");
            break;
        }
        if (input < rand) {
            input = prompt("[up]  1부터 100 사이 난수를 맞춰보세요");
        }
        if (input > rand) {
            input = prompt("[down]  1부터 100 사이 난수를 맞춰보세요");
        }
    }
}
