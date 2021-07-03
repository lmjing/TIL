/**
 * level 2
 * 스택/큐
 */
function solution(progresses, speeds) {
    let answer = [];
    const N = speeds.length;

    let dayCheck = progresses.map((p, i) => {
        const last = 100 - p;
        return Math.ceil(last / speeds[i]);
    });

    let cursor = 0;
    let day = 1;

    while(cursor < N) {
        let count = 0;
        for(let i=cursor; i<N; i++) {
            if(dayCheck[i] <= day) count++;
            else break;
        }
        if (count > 0) {
            answer.push(count);
            cursor += count;
        }
        day++;
    }

    return answer;
}