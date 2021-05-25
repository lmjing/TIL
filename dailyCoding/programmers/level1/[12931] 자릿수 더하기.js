/**
  level1
  연습문제
/*

function solution(n)
{
    return n.toString().split('').reduce((sum, v) => sum + parseInt(v), 0);
}
