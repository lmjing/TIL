# 유용한 Git Command

## 작업 내역 되돌리기
1. 전체
```javascript
git reset --hard
```

2. 특정 파일들만 되돌리기
```javascript
git checkout -- [파일명]
// git checkout -- src/main/test/* - 하위 모든 파일 삭제
```