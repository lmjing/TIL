/**
 * level 2
 * 2018 KAKAO BLIND RECRUITMENT
 * 문제 오류: 악보에 E#도 포함해야 함
 */
function solution(m, musicinfos) {
    let answer = musicinfos.reduce((result, musicinfo) => {
        let infos = musicinfo.split(",")

        let st = infos[0].split(":").map(s => parseInt(s));
        let end = infos[1].split(":").map(s => parseInt(s));

        if (end[1] < st[1]) {
            end[1] += 60;
            end[0] -= 1;
        }
        const time = (end[1] - st[1]) + (end[0] - st[0]) * 60;

        // const regexp = new RegExp('([A-G]{1})(#?)', 'g');
        const regexp = new RegExp('([A,C-D,E-G]{1})(#?)|(B+(?!#))', 'g');
        let totals = infos[3].match(regexp);
        let i = 0;
        let total = '';

        while (i < time) {
            // const str = totals[i++ % totals.length]
            // total += (str === 'B#' || str === 'E#') ? 'z' : str;
            total += totals[i++ % totals.length];
        }

        let find = total.indexOf(m);
        while (find >= 0) {
            if (total[find + m.length] !== '#') {
                result.push({
                    title: infos[2],
                    time
                });
                return result;
            }
            find = total.indexOf(m, find + 1)
        }

        if ((find = total.indexOf(m)) >= 0 && total[find + m.length] !== '#') result.push({
            title: infos[2],
            time
        });
        return result;
    }, []).sort((a, b) => b.time - a.time);

    if (answer.length > 0) return answer[0].title;
    return "(None)"
}

// console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));
// console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))
// console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]))
// console.log(solution("ABC", ["13:00,13:05,NEW,ABCDEF", "12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))
// console.log(solution("ABC", ["12:59,13:07,HELLO,C#DEFGAB", "13:00,13:03,WORLD,ABC"]))
console.log(solution("CCB", ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"]))
// console.log(solution("ABC", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:14,WORLD,ABCDEF"]))