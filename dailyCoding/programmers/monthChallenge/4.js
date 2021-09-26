function solution(a, s) {
    let answer = [];
    let pointer = 0;
    const set = new Set();

    class Cell {
        groupId;
        list;
        sum;

        constructor(value, idx) {
            this.groupId = idx;
            this.list = [`${idx}.${value}`];
            this.sum = value;
        }
        addList(value, idx) {
            this.list.push(`${idx}.${value}`);
            this.sum += value;
        }
        // sum() {
        //     return this.list.reduce((a, b) => {
        //         const an = Number.parseInt(a.split('.')[1]);
        //         const bn = Number.parseInt(b.split('.')[1]);
        //         console.log(`an: ${an}`)
        //         return an + bn;
        //     });
        // }
        combine(array) {
            this.list.concat(array);
            array.forEach(v => {
                const value = Number.parseInt(v.split('.')[1]);
                this.sum += value;
            })
        }
    }

    async function cellDivision(b, i, c, mapper, cellList) {
        if (i >= b.length) {
            // 그만
            set.add(c);
            return;
        }

        // let combine = false;
        const cellIdx = mapper[i].cell;
        if (cellIdx > 0) {
            const X = cellList[cellIdx];
            const Y = cellList[cellIdx - i];
            // console.log(X.sum, Y.sum);
            if (X.sum === Y.sum) {
                // 합치는 경우의 수
                const newX = {};
                await Object.assign(newX, X);
                const newMapper = {...mapper};
                const newCellList = [...cellList];
                const newC = [...c];
                Y.list.forEach(item => {
                    const key = Number.parseInt(item.split('.')[0]);
                    mapper[key].cell = X.cell;
                })
                console.log(newX)
                newX.combine(Y.list);
                newCellList[cellIdx] = newX;
                newCellList.shift();
                newC.push(i);

                cellDivision(b, i, newC, newMapper, newCellList);
            }
            cellDivision(b, i+1, c, mapper, cellList);
        }
    }

    async function check(l) {
        const b = a.slice(pointer, pointer + l);

        if (b.length === 1) {
            answer.push(1);
        }

        let cellList = b.map((v, idx) => new Cell(v, idx));
        let mapper = {};
        b.forEach((num, idx) => {
            mapper[idx] = {value: num,  cell: idx};
        });

        let i = 1;
        let c = [];

        await cellDivision(b, i, c, mapper, cellList);
        answer.push(set.size);
        console.log(`answer: ${set.size}`)

        set.clear();
        pointer += l;
    }

    // main
    s.forEach(l => {
        check(l);
    })

    return answer;
}

console.log(solution([1, 1, 1, 1, 1, 1, 2, 5, 8, 2, 1, 1, 4, 8, 8, 8, 12, 6, 6], [4,3,1,5,6]	));



// function cellDivision(b) {
//     let cellList = b.map((v, i) => new Cell(v, i));
//
//
//     let mapper = {};
//     b.forEach((num, idx) => {
//         mapper[idx] = {value: num,  cell: idx};
//     });
//     let i = 1;
//     let c = [];
//
//     while(i !== b.length) {
//         let combine = false;
//         const cellIdx = mapper[i].cell;
//         if (cellIdx > 0) {
//             const X = cellList[cellIdx];
//             const Y = cellList[cellIdx - i];
//             if (X.sum() === Y.sum()) {
//                 // TODO 합치거나, 합치지 않거나.. 선택 -> 총 개수를 구해야 함
//             }
//         }
//         if (combine) {
//             Y.list.forEach(item => {
//                 const key = Number.parseInt(item.split('.')[0]);
//                 mapper[key].cell = X.cell;
//             })
//             cellList[cellIdx] = X.combine(Y.list);
//             cellList.shift();
//             c.push(i);
//         } else {
//             i++;
//         }
//     }
// }