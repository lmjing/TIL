/*
소요시간 1시간 10분
 */
function solution(n, wires) {
    class Tree {
        tree;
        min;

        constructor(n) {
            this.tree = new Array(n);
            this.min = n-1;
        }

        addConnect(v1, v2) {
            this.connect(v1, v2);
            this.connect(v2, v1);
        }

        connect(v, target) {
            const connected = this.tree[v-1] || [];
            connected.push(target);
            this.tree[v-1] = connected;
        }

        size(v) {
            return (this.tree[v-1] || []).length;
        }

        getCount(v, except) {
            if(this.size(v) === 1)
                return 1; // 연결된게 하나뿐 = except
            const connected = this.tree[v-1] || [];
            return connected.reduce((pev, cur) => {
                if (cur === except) return pev;
                return pev + this.getCount(cur, v);
            }, 0) + 1;
        }

        updateDiff(v1, v2) {
            const v1Count = this.getCount(v1, v2);
            const v2Count = this.getCount(v2, v1);
            const diff = Math.abs(v1Count - v2Count);
            this.min = Math.min(this.min, diff);
        }
    }
    const tree = new Tree(n);
    wires.forEach(([v1, v2]) => tree.addConnect(v1, v2));
    wires.forEach(([v1, v2]) => tree.updateDiff(v1, v2));

    return tree.min;
}

console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))
// console.log(solution(4, [[1, 2], [2, 3], [3, 4]]))