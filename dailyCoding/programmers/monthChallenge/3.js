function solution(a, b, g, s, w, t) {
    let time = 0;
    let min = Math.pow(10, 10);



    function test(ra, rb, g, s, time) {
        if (ra === 0 && rb === 0) {
            // 목표 달성
            min = Math.min(min, time);
            return;
        }

        const N = g.length;
        while(ra > 0 || rb > 0) {
            // 모든 도시 순회
            for (let i=0; i<N; i++) {
                if (ra === 0 && rb === 0) break; // 작업 끝

                // 1. 금을 가져온다.
                const canA = Math.min()
                g[i] -=
                ra -= g[i];

                // 2. 은을 가져온다.

            }
        }
    }

    var answer = -1;
    return answer;
}