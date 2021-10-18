/*
실행시간 초과
 */
function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 상, 하, 좌, 우
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0 ,0];
    const oppDi = [1, 0, 3, 2];
    // 왼아, 왼위, 오위, 오아
    const px = [0, 0, 2, 2];
    const py = [1, 3, 3, 1];
    const pd = [[0, 3], [1, 3], [1, 2], [0, 2]];

    class Node {
        d;
        point;
        count;
        rect;
        rectIdx;

        constructor(d, x, y) {
            this.point = [x, y];
            this.count = 0;
            this.move(d);
        }

        move(d) {
            this.count += 1;
            this.point[0] += dx[d];
            this.point[1] += dy[d];
            this.d = d;
        }

        setRect(idx) {
            this.rectIdx = idx;
            this.rect = rectangle[idx];
        }
    }
    let q = [];
    const initQueue = (d1, d2) => {
        q.push(new Node(d1, characterX, characterY));
        q.push(new Node(d2, characterX, characterY));
    }
    // find rectangle
    let recIdx = rectangle.findIndex(([x1, y1, x2, y2]) => {
        if (characterX === x1) {
            if (characterY === y1) initQueue(0, 3);// 왼쪽 아래 꼭지점 -> 상, 우
            else if (characterY === y2) initQueue(1, 3);// 왼쪽 위 꼭지점 -> 하, 우
            else initQueue(0, 1); // 상, 하
        } else if (characterX === x2) {
            if (characterY === y1) initQueue(0, 2);// 오른쪽 아래 꼭지점 -> 상, 좌
            else if (characterY === y2) initQueue(1, 2);// 오른쪽 위 꼭지점 -> 하, 좌
            else initQueue(0, 1); // 상, 하
        } else if (characterY === y1 || characterY === y2) {
            initQueue(2, 3); // 좌, 우
        }
        if (q.length > 0) return true;
    });
    q.forEach(v => v.setRect(recIdx));

    while(q.length > 0) {
        const cur = q.shift();
        const [x, y] = cur.point;
        if (x === itemX && y === itemY) return cur.count; // 목표 지점

        let originD = cur.d; // 겹치거나 꼭지점인 경우 변경됨.

        const checkPoint = (i, x, y, rect) => {
            return (x === rect[px[i]] && y === rect[py[i]]);
        }
        // 꼭지점 => 방향 전환
        if (cur.rect[0] === cur.point[0]) {
            for (let i=0; i<4; i++) {
                if (checkPoint(i, x, y, cur.rect)) {
                    // 기존 반대 방향은 제외(다시 돌아가는거니깐)
                    const d = pd[i].filter(_ => _ !== oppDi[cur.d])[0];
                    cur.move(d);
                    break;
                }
            }
        }
        // 겹치는 경우 체크
        for (let i=0; i<rectangle.length; i++) {
            if (cur.rectIdx === i) continue;
            const r = rectangle[i];
            if (r[0] <= x && r[2] >= x && r[1] <= y && r[3] >= y) {
                if (cur.d > 1) { // 좌우인 경우 -> 상하로 변경됨
                    if (cur.rect[1] === y) cur.move(1); // 밑으로 내려감
                    else cur.move(0);
                } else { // 상하 -> 좌우
                    if (cur.rect[0] === x) cur.move(2); // 왼쪽
                    else cur.move(3);
                }
                cur.setRect(i);
                break;
            }
        }
        if (originD === cur.d) { // 꼭지점도 아니고 겹치지도 않은 경우
            cur.move(cur.d);
        }
        q.push(cur);
    }

    return null;
}
// console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8))
console.log(solution([[1,1,5,7]], 1, 1, 4, 7))