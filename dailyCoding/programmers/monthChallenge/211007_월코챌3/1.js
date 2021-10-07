function solution(n) {
    let x = 0;
    let rest = 0;
    while(rest !== 1) {
        rest = n % (++x);
    }
    return x;
}