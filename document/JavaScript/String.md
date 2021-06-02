# String

## []String.prototype.localeCompare()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

> The localeCompare() 메서드는 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴합니다.

```'a'.localeCompare('c'); // -2 or -1 (or some other negative value)```
- 앞의 문자(열)이 뒤의 문자(열)과 비교해서 앞이면 음수 / 뒤면 양수
- sort 할 때 좋다.

```
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```