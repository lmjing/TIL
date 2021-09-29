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
console.log(solution('AAAAE'));