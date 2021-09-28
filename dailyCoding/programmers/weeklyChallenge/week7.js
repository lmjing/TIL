/*
86048
array -> set 변경
*/
// function solution(enter, leave) {
//     let e = 0, l = 0;
//     let answer = new Array(leave.length);
//     let room = [];
//     while (e < enter.length) {
//         // 일단 입장
//         const et = enter[e];
//         answer[et - 1] = 0;
//         // 기존에 있던 멤버들과 만남
//         room.forEach((v, i) => {
//             answer[v - 1]++;
//             answer[et - 1]++;
//         });
//         room.push(et);
//         // 입장과 동시에 퇴장 가능
//         if (et === leave[l]) {
//             // 퇴장 가능한만큼 퇴장
//             while (l < leave.length && answer[leave[l] - 1] !== undefined) {
//                 room = room.filter((v, i) => v !== leave[l]);
//                 l++;
//             }
//         }
//         e++;
//     }
//     return answer;
// }
function solution(enter, leave) {
    let e = 0, l = 0;
    let answer = new Array(leave.length);
    let room = new Set();
    for (let e = 0; e < enter.length; e++) {
        const t = enter[e];
        answer[t - 1] = 0;

        // 기존에 있던 멤버들과 만남
        for (let v of room) {
            answer[v - 1]++;
            answer[t - 1]++;
        }
        room.add(t); // 입장

        // 퇴장 가능한 모든 사람 퇴장
        if (t === leave[l]) {
            while (l < leave.length && room.has(leave[l])) {
                room.delete(leave[l++]);
            }
        }
    }
    return answer;
}
solution([1, 3, 2], [1, 2, 3]);