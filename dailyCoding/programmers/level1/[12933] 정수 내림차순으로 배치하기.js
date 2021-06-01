/**
 * level 1
 * 연습문제
 */
function solution(n) {
    return parseInt(n.toString().split("").sort((a, b) => b-a).join(''));
}