function solution(numbers) {
    const check = new Array(10).fill(true);
    numbers.forEach(num => check[num] = false);
    let sum = 0;
    check.forEach((c, i) => {
        if (c) sum += i;
    })
    return sum;
}