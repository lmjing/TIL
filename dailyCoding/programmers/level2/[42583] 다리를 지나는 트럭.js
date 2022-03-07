function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let time = 0;
    let sum = 0;
    
    while(truck_weights.length > 0) {
        const truck = truck_weights.shift();
        while(sum + truck > weight) {
            time += bridge_length - bridge.length;
            sum -= bridge.shift();
        }
        bridge.push(truck);
        time++;
        sum += truck;
    }
    
    return time + bridge_length;
}
// 미해결- TODO 테스트 케이스 더 확인 필요
