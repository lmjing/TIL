/**
 * level2
 * 완전탐색
 */
function solution(numbers) {
    const base = numbers.split('');
    let set = new Set();
    const N = base.length;
    // 모든 조합 찾기
    let max = 0;
    const combination = (n, str, rest) => {
        rest.forEach((r, i) => {
            const newNum = parseInt(str + r);
            if(!set.has(newNum)) {
                set.add(newNum);
                if(max < newNum) max = newNum;
            }
            if(n < N) {
                const del = rest.splice(i, 1)[0];
                combination(n+1, newNum.toString(), rest)
                rest.splice(i, 0, del);
            }
        })
    }
    combination(1, "", base)
    // 소수 찾기
    let primeCheck = Array(10000000); // 1이면 소수 아님. 값 없어야 소수
    let count = 0;
    for(let i=2; i<=max; i++) {
        if(!primeCheck[i]) { // 소수임
            count++;
            for(let j=i*i; j<=max; j+=i) {
                primeCheck[j] = 1; // 배수들을 지움
            }
        }
    }
    primeCheck[0] = 1;
    primeCheck[1] = 1;
    let answer = 0;
    set.forEach(n => {
        if(!primeCheck[n]) answer++;
    })
    return answer;
}
// console.log(solution("012"))
// console.log(solution("011"))
console.log(solution("17"))