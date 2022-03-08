function solution(n, lost, reserve) {
    const lSorted = lost.filter(_ => {
        const i = reserve.indexOf(_)
        if (i >= 0) {
            reserve.splice(i, 1);
            return false;
        } else return true;
    }).sort((a,b) => a-b);
    const rSorted = reserve.sort((a,b) => a-b);
    
    let answer = n - lSorted.length;
    
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
