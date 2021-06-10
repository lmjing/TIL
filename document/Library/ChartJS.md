# Chart JS

> Vue-Chart.js 에서도 동일하게 적용 가능

## yAxes
옵션 설정
```javascript
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                // stepSize: 1,
                suggestedMax: 10
            }
        }]
    }
}
```

1. 0부터 시작: `beginAtZero`
2. `stepSize`: 증가 값 설정(값이 고정되므로, max의 크기가 클 경우 가독성이 떨어짐)
3. `suggestedMax`: 임의 max값을 설정한다. (설정 값 보다 실제 데이터가 큰 경우 max 값이 갱신됨)