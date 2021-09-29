/*
84512
 */
function solution(target) {
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    let dic = [];
    let answer = -1;

    const makeWord = (input) => {
        if (input.length >= 5) return false;

        let word = '';
        for (const v of alpha) {
            word = input + v;
            dic.push(word);
            if (word === target) {
                answer = dic.length;
                return true;
            }
            const find = makeWord(word);
            if (find) return true;
        }
    }
    makeWord('');
    return answer;
}
/*
좋은 해답 - 내가 구현하려던거...
r + ['A', 'E', 'I', 'O', 'U'].indexOf(c) * [781, 156, 31, 6, 1][i] + 1
1. r = 각 자리 기준으로 이전 경우의 수 건너 뛰므로 이전 값 더함
2. ['A', 'E', 'I', 'O', 'U'].indexOf(c) = 해당 문자의 순서 확인 (즉, I일 경우 A, E일 때 모든 경우의 수 건너 뛰고 자기 차례 I가 됨 = 즉, 이전 (A, E) 개수 = 2)
3. [781, 156, 31, 6, 1][i] = 해당 자리 수 기준으로 가능한 모든 경우의 수 (해당 자리전까지 특정 값으로 픽스일 때 해당 자리 이후에 올 수 있는 모든 경우의 수)
    - [781=(5*5*5*6)+31 / 156=(5*5*6)+6 / 31=(5*6)+1 / 6=(6) / 1]
    - 156 기준으로 확인하자면, (5*5*6) = 가능한 모든 2자리, 3자리 수 00? / 0xx = 가능한 모든 1자리 수
4. 1 = 2에서 A가 걸리는 경우
 */
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}

console.log(solution('AAAAE'));