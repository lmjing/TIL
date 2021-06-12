/**
 level 1
 월간 코드 챌린지 시즌1
 */

function solution(n) {
    let temp = '';
    while(n > 0) {
        temp = temp + (Math.floor(n % 3)).toString();
        n = Math.floor(n / 3);
    }
    let z = 1;
    let answer = 0;
    for(let i=temp.length-1; i>=0; i--) {
        const num = temp.charAt(i);
        answer += num*z;
        z *= 3;
    }
    return answer;
}