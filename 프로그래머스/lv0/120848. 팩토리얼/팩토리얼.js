function solution(n) {
  //팩토리얼 값 계산해서 크기비교
  const factorial= (num)=> {
    let fac=1
    for (let i=1; i<=num ;i++ ){
    fac =fac*i
    }
    return fac
  }

  let answer = 0;
  
  for( let j =0 ;j<11 ;j++){
    if (factorial(j)<=n && factorial(j+1)>n){
      answer=j
      break
    }
  }
  return answer;
}