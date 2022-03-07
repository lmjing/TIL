function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let time = 0;
    let sum = 0;
    
    while(truck_weights.length > 0) {
        const truck = truck_weights.shift();
        while(sum + truck > weight) {
            // 커
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
// 미해결- TODO 테스트 케이스 더 확인 필요
