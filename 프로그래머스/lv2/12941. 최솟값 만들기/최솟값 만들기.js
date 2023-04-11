function solution(A,B){
  var answer = 0;

  //최대값과 최소를 곱해야함
  //arr에서 한번 쓴 값은 빼줘야함 
  A.sort((a,b)=>a-b)
  B.sort((a,b)=>b-a)

  for(i =0 ;i <A.length;i++){
      // answer+= Math.max(...A)*Math.min(...B)
      // let Aindex=A.findIndex((e)=>e===Math.max(...A))
      // let Bindex=B.findIndex((e)=>e===Math.min(...B))
      // A.splice(Aindex,1)
      // B.splice(Bindex,1)
      answer+=A[i]*B[i]
  }
  
  return answer;
}

console.log(solution([2,1]	,[3, 4]))