/**
 * TODO timeout (10초 이내로 개발 필요)
 */

function solution(s) {
    const map = {
        'o': [['one', 1]],
        'z': [['zero', 0]],
        't': [['two', 2], ['three', 3]],
        'f': [['four', 4], ['five', 5]],
        's': [['six', 6], ['seven', 7]],
        'e': [['eight', 8]],
        'n': [['nine', 9]]
    };

    let i = 0;
    let answer = '';
    while(i < s.length) {
        const c = s[i];
        if(!Number.isNaN(parseInt(c))) {
            answer += s[i];
            i++;
        } else {
            const array = map[c];
            for(let j=0; j<array.length; j++) {
                const number = array[j];
                if (s.includes(number[0])) {
                    answer += number[1];
                    i += number[0].length;
                    break;
                }
            }
        }
    }

    return answer;
}

console.log(solution("23four5six7"));