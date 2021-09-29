/*
86491번 제출코드는 아래로됨
 */
function solution(sizes) {
    return sizes.reduce(([mh, mv], [a, b]) => [Math.max(mh, Math.min(a, b)), Math.max(mv, Math.max(a, b))], [0, 0]).reduce((_, $) => _ * $)
}
function solution(sizes) {
    const swap = (_) => [_[1], _[0]];
    return sizes.reduce((maxs, cur) => {
        if (cur[0] === Math.min(...cur)) cur = swap(cur);
        return maxs.map((v, i) => Math.max(v, cur[i]));
    }, [0, 0])
        .reduce((_, $) => _ * $)
}