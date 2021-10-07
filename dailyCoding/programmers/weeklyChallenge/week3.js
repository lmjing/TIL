/*
84021 퍼즐 조각 채우기
 */
function solution(game_board, table) {
    // 순서: 오(0), 아(1), 왼(2), 위(3)
    const dx = [1, 0, -1, 0, 1, 0, -1, 0];
    const dy = [0, 1, 0, -1, 0, 1, 0, -1];
    const N = table.length;

    // 1. 블록 map 구현
    let blockMapper = {}; // key: area / value: blocks
    table.forEach((row, y) => {
        row.forEach((v, x) => {
            if (v === 1) { // 블록 저장
                table[y][x] = 2;
                let block = {
                    startPoint: {y, x},
                    history: [], // 이중 배열 (innerArray = 한칸에서 갈 수 있던 모든 히스토리)
                };
                let stack = [block.startPoint];
                while (stack.length > 0) {
                    const cur = stack.shift();
                    // 네 방향 모두 갈 수 있는지 확인
                    let cellHistory = [];
                    for (let i=0; i<4; i++) {
                        const ny = cur.y + dy[i];
                        const nx = cur.x + dx[i];
                        if (ny >= 0 && ny < N && nx >=0 && nx <N && table[ny][nx] === 1) {
                            table[ny][nx] = 2;
                            cellHistory.push(i); // 방향 히스토리 추가
                            stack.push({y: ny, x: nx}); // stack 추가
                        }
                    }
                    block.history.push(cellHistory);
                }
                block.area = block.history.length;
                const areaBlocks = (blockMapper[block.area] || []);
                areaBlocks.push(block);
                blockMapper[block.area] = areaBlocks;
            }
        })
    })


    // 2. 게임 보드 순회
    let blanks = [];
    game_board.forEach((row, y) => {
        row.forEach((v, x) => {
            if (v === 0) { // 블록 저장
                game_board[y][x] = 2;
                let blank = {
                    startPoint: {y, x},
                    history: [], // 이중 배열 (innerArray = 한칸에서 갈 수 있던 모든 히스토리)
                };
                let stack = [{y, x}];
                while (stack.length > 0) {
                    const cur = stack.shift();
                    // 네 방향 모두 갈 수 있는지 확인
                    let cellHistory = [];
                    for (let i=0; i<4; i++) {
                        const ny = cur.y + dy[i];
                        const nx = cur.x + dx[i];
                        if (ny >= 0 && ny < N && nx >=0 && nx <N && game_board[ny][nx] === 0) {
                            game_board[ny][nx] = 2;
                            cellHistory.push(i); // 방향 히스토리 추가
                            stack.push({y: ny, x: nx}); // stack 추가
                        }
                    }
                    blank.history.push(cellHistory);
                }
                blank.area = blank.history.length;
                blanks.push(blank);
            }
        })
    })

    // 3. 공백에 대해 맞는 블록들 확인
    // let answer = 0;
    let max = 0;
    const checkBlankWithBlock = (total, idx, blockMapper) => {
        if (idx >= blanks.length) {
            max = Math.max(max, total);
            return;
        }

        const blank = blanks[idx];
        const ableBlocks = blockMapper[blank.area] || [];
        // 넓이가 동일한 모든 블록 삽입 가능한 모양인지 확인
        for (const [bi, block] of ableBlocks.entries()) {
            let diff = -1; // 몇번 회전이 필요한지.
            let flag = true;
            // 모든 칸에 대하여 동일한지 비교
            for (const [chi, cellHistory] of blank.history.entries()) {
                const blockCellHistory = block.history[chi];
                if (cellHistory.length !== blockCellHistory.length) {
                    flag = false;
                    break;
                } // 같지 않음. 삽입 불가
                for (const [di, d] of cellHistory.entries()) {
                    const curDiff = Math.abs(d - blockCellHistory[di]);
                    if (diff < 0) diff = curDiff;
                    else if (diff !== curDiff) {
                        flag = false;
                        break;
                    } // 같지 않음. 삽입 불가
                }
            }
            // 같음 = 삽입 가능
            // 1. 가능하나, 삽입하지 않음 -> 다음 가능한 블록 검사
            // 2. 삽입 -> 다음 블럭 탐색한다.
            // if (flag) {
                const newBlockMapper = {...blockMapper};
                newBlockMapper[block.area].splice(bi, 1);
                checkBlankWithBlock(total + block.area, idx+1, newBlockMapper);
            // }
        }
        checkBlankWithBlock(total, idx+1, blockMapper);
    }
    checkBlankWithBlock(0, 0, blockMapper);
    return max;
}

const game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]];
const table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]];
console.log(solution(game_board, table))
// console.log(solution([[0,0,0],[1,1,0],[1,1,1]], [[1,1,1],[1,0,0],[0,0,0]]))