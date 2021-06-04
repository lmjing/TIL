function solution(x, n) {
    let answer = [];
    for(let i=x; answer.length < n; i+=x) {
       answer.push(i);
    }
    return answer;
}
