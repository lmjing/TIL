// function solution(n, left, right) {
//     let array = new Array(n).fill(new Array(n).fill(1));
//     array = array.map((v, i) => {
//         return v.map((z, j) => {
//             return Math.max(i, j) + 1
//         })
//     })
//     array = array.flat();
//     return array.slice(left, right+1);
// }

// function solution(n, left, right) {
//     let array = [];
//     for (let i=1; i<=n; i++) {
//         for (let j=1; j<=n; j++) {
//             array.push(Math.max(i, j));
//         }
//     }
//     return array.slice(left, right+1);
// }

function solution(n, left, right) {
    let array = [];
    const is = Math.floor(left / n);
    const js = left % n;
    const ie = Math.floor(right / n);
    const je = right % n;
    for (let i=is; i<=ie; i++) {
        for (let j=(i===is?js:0); j<=(i===ie?je:n-1); j++) {
            console.log(i, j)
            array.push(Math.max(i, j) + 1);
        }
    }
    return array;
}

console.log(solution(3, 2, 5))