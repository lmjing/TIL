/**
 * level 1
 * 연습문제
 */
function solution(strings, n) {
    strings.sort((a, b) => {
        let diff = a.charCodeAt(n) - b.charCodeAt(n);
        if (diff === 0) {
            return a > b ? 1 : -1;
        }
        return diff;
    });
    return strings;
}