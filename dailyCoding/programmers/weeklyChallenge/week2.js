function solution(scores) {
    let answer = '';
    const N = scores.length;
    for(let i=0; i<N; i++) {
        let max = -1, min = 101;
        let maxCnt = 0, minCnt = 0;
        const ownScore = scores[i][i];
        let sum = scores.reduce((acc, score) => {
            const c = score[i];
            if (min > c) {
                min = c;
                minCnt = 1;
            } else if (min === c) minCnt++;
            if (max < c) {
                max = c;
                maxCnt = 1;
            } else if (max === c) maxCnt++;
            return acc + score[i];
        }, 0);

        let avg = sum / N;
        if ((min === ownScore && minCnt === 1) || (max === ownScore && maxCnt === 1)) {
            sum -= ownScore;
            avg = sum / (N-1)
        }

        if (avg >= 90) answer += 'A'
        else if (avg >= 80) answer += 'B'
        else if (avg >= 70) answer += 'C'
        else if (avg >= 50) answer += 'D'
        else answer += 'F'
    }
    return answer;
}

console.log(solution([[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]))