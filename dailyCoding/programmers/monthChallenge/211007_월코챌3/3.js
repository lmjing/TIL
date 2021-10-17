// 1~3 통과
function solution(n, m, x, y, queries) {
    const drx = [0, 0, -1, 1]; // 행
    const dry = [-1, 1, 0, 0]; // 열
    let answer = 0;

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            let cx = i, cy = j;
            queries.forEach(([command,dx]) => {
                cx += drx[command] * dx;
                cy += dry[command] * dx;
                if (cx < 0) cx = 0;
                else if (cx >= n) cx = n;
                if (cy < 0) cy = 0;
                else if (cy >= m) cy = m;
            })
            if (cx === x && cy === y) answer++;
        }
    }

    return answer;
}


// 틀린 코드....
// function solution(n, m, x, y, queries) {
//     const drx = [0, 0, -1, 1]; // 행
//     const dry = [-1, 1, 0, 0]; // 열
//     let answer = 0;
//
//     let mx = 0, my = 0;
//     queries.forEach(([di, dx]) => {
//         mx += drx[di] * dx;
//         my += dry[di] * dx;
//     });
//
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             let cx = i + mx, cy = j + my;
//             if (cx < 0) cx = 0;
//             else if (cx >= n) cx = n;
//             if (cy < 0) cy = 0;
//             else if (cy >= m) cy = m;
//             if (cx === x && cy === y) answer++;
//         }
//     }
//
//     return answer;
// }

console.log(solution(2, 2, 0, 0, [[2,1],[0,1],[1,1],[0,1],[2,1]]))