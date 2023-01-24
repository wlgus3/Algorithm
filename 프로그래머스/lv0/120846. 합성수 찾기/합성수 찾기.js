function solution(n) {
  //n이하의 합성수 개수 
  const compositeN= (num)=>{
    for (let i =2; i<num; i++){
      if (num%i===0){
        return true
              }
    }
  }
  let count=0
  for (let i=1; i<=n;i++){
    if (compositeN(i)){
      count+=1
    }
  }
  return count;
}