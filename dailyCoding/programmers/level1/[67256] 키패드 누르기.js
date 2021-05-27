/**
 * level 1
 * 2020 카카오 인턴십
 */
function solution(numbers, hand) {
    let answer = '';
    let l = 10, r = 12;

    let moveCnt = (number) => {
        return number/3 + number%3;
    };
    numbers.forEach(n => {
        if(n === 0) n = 11;

        let left = true;
        if (n === 3 || n === 6 || n === 9) left = false;
        else if (n === 2 || n === 5 || n === 8 || n === 11) {
            let dl = Math.floor(moveCnt(Math.abs(l - n)));
            let dr = Math.floor(moveCnt(Math.abs(r - n)));
            if (dr === dl) left = (hand === "left");
            else if (dr < dl) left = false;
        }

        if(left) {
            answer += 'L';
            l = n;
        } else {
            answer += 'R';
            r = n;
        }
    });
    return answer;
}

console.log(solution(	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));