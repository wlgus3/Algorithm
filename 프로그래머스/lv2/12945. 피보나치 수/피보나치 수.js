function solution(n){
  let fibonacci=[0,1,1]
  for(i=3;i<=n;i++){
    fibonacci.push((fibonacci[i-1]+fibonacci[i-2])%1234567)
  }
  return fibonacci[n]%1234567
}