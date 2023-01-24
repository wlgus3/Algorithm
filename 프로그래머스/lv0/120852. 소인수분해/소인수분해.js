function solution(n) {
  let prime = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) { //소인수분해이기에 나머지0일때 반복 나눗셈
          prime.push(i);
          
          n /= i;
      }
  }
  if(n >= 2){ 
      prime.push(n);    
  }
  
  let ans = Array.from(new Set(prime)); // 중복제거
  return ans//.sort((a,b) => a - b);
  
}