/**
 * level 2
 * 깊이/너비 우선 탐색(DFS/BFS)
 */
function solution(numbers, target) {
    var answer = 0;

    const dfs = function(sum, i) {
        if (i >= numbers.length) {
            if (sum === target) answer++;
            return;
        }
        dfs(sum - numbers[i], i+1);
        dfs(sum + numbers[i], i+1);
    }
    dfs(0, 0);

    return answer;
}