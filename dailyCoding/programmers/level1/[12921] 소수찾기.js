/**
 * level 1
 * 연습 문제
 * 에라토스테네스의 체(https://mizzo-dev.tistory.com/entry/baekjoon1929)
 */
function solution(n) {
    let primeCheck = Array(n + 1); // 1이면 소수 아님. 값 없어야 소수
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (!primeCheck[i]) { // 소수임
            count++;
            primeCheck[i] = 1;
            for (let j = i * i; j <= n; j += i) {
                primeCheck[j] = 1; // 배수들을 지움
            }
        }
    }

    return count;
}