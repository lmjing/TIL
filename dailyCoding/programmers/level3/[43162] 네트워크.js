/**
 * level 3
 * 깊이/너비 우선 탐색(DFS/BFS)
 */
function solution(n, computers) {
    let answer = 0;
    const N = computers.length;

    let visit = Array(N);
    let visitCnt = 0;
    let queue = [0];

    while(queue.length > 0) {
        const i = queue.pop();
        visit[i] = 1; visitCnt++;

        for (let j=0; j<N; j++) {
            if (!visit[j] && i!==j && computers[i][j]) {
                queue.push(j);
            }
        }
        if(queue.length === 0) {
            answer++;
            const next = visit.findIndex(i => i !== 1);
            if(next >= 0) queue.push(next);
        }
    }

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))