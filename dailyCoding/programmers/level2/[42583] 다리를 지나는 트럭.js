function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let time = 0;
    let sum = 0;
    
    while(truck_weights.length > 0) {
        const isFinish = bridge.length > 0 && bridge[0].time + bridge_length === time;
        if (isFinish) {
            const first = bridge.shift();
            time = bridge_length + first.time;
            sum -= first.weight;
        }
        const truck = truck_weights.shift();
        while(sum + truck > weight) {
            const first = bridge.shift();
            time = bridge_length + first.time - 1;
            sum -= first.weight;
        }
        time++;
        bridge.push({weight: truck, time});
        sum += truck;
    }
    
    const last = bridge[bridge.length - 1];
    
    return bridge_length + last.time;
}
/*
초과되지 않고, 시간이 다 지나서 다리를 다 지난 경우도 추가해야 함
https://programmers.co.kr/questions/14215 
*/
