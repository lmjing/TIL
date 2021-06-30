/**
 * level1
 * Summer/Winter Coding(~2018)
 * 시간초과
 */
function solution(d, budget) {
    d.sort();
    let sum = 0;
    let i = 0;
    while (sum <= budget && i < d.length) {
        sum += d[i++];
    }
    return i-1;
}

solution([1, 3, 2, 5, 4], 9);