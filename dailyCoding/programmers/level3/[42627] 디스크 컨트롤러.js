function solution(jobs) {
    const N = jobs.length;
    let sum = 0;
    let prior = [null];
    let time = 0;

    const swap = (array, a, b) => {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    const jobTotalTime = (job, currentTime) => {
        return (currentTime - job[0]) + job[1];
    }
    while(jobs.length > 0 || prior.length > 1) { // 모든 일이 끝날 때 까지 수행
        if(jobs.length > 0 && jobs[0][0] <= time) { // 현재 시간 기준으로 수행가능한 모든 job을 heap에 넣음
            const job = jobs.shift();
            let idx = prior.length;
            let parent = Math.floor(idx / 2);
            prior.push(job);
            // min heap 유지
            while(idx > parent && parent > 0 && jobTotalTime(prior[parent], time) > jobTotalTime(job, time)) {
                swap(prior, idx, parent);
                idx = parent;
                parent = Math.floor(idx / 2);
            }
        } else {
            if (prior.length <= 1 && jobs.length > 0) {
                time = jobs[0][0];
                continue;
            }
            // min을 꺼내 job 수행
            const min = prior[1];
            console.log(jobTotalTime(min, time), time)
            sum += jobTotalTime(min, time);
            time += min[1];

            prior[1] = prior[prior.length - 1];
            prior.pop(); // 마지막 값 제거
            let idx = 1;
            let c1 = idx*2, c2 = idx*2+1;
            while(c1 < prior.length) {
                let c = c1;
                if(c2 < prior.length && jobTotalTime(c1, time) > jobTotalTime(c2, time)) c = c2;
                swap(prior, c, idx);
                idx = c;
                c1 = idx*2, c2 = idx*2+1;
            }
        }
    }
    return Math.floor(sum / N);
}

// console.log(solution([[0, 3], [1, 9], [2, 6]], 9))
console.log(solution(	[[0, 1], [2, 3]], 1))