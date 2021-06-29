/**
 * level1
 * Summer/Winter Coding(~2018)
 * 시간초과
 */
function solution(d, budget) {
    let max = 0;
    function check(i, cnt, sum) {
        if (sum >= budget || i >= d.length) {
            max = Math.max(max, sum > budget ? cnt-1 : cnt);
            return;
        }
        console.log(i, cnt, sum);
        check(i+1, cnt, sum);
        check(i+1, cnt+1, sum+d[i]);
    }
    check(0, 0, 0);
    return max;
}

solution([1, 3, 2, 5, 4], 9)