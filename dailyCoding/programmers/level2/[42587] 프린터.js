function solution(priorities, location) {
    let max = Math.max(...priorities);
    let idxArray = priorities.map((p, i) => i);
    let order = 0;
    while(priorities.length > 0) {
        const I = idxArray.shift();
        const J = priorities.shift();
        if(max === J) {
            order++;
            if(I === location) return order;
            max = Math.max(...priorities);
        } else {
            idxArray.push(I);
            priorities.push(J);
        }
    }
    return 0;
}

console.log(solution([2, 1, 3, 2], 2))