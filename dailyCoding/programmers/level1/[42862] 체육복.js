function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    const lSorted = lost.sort((a,b) => a-b);
    const rSorted = reserve.sort((a,b) => a-b);
    
    for(const l of lSorted) {
        if (reserve.length <= 0) break;
        
        while(reserve.length > 0 && rSorted[0] < l-1) {
            rSorted.shift();
        }
        
        const first = rSorted[0];
        if (first >= l-1 && first <= l+1) {
            answer++;
            rSorted.shift();
        }
    }
    return answer;
}
