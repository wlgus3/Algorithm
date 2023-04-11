// function solution(s){
//   var answer = true;
    
//   while(s.includes('()')){
//     s=s.split('()').join('')
//   }
//   if(s!=''){answer=false}
//   return answer;
//     //시간초과로 실패 
// }
function solution(s){
  var answer = true;
  //(())
  //()()
  //()(())
  let sum=0
  let obj = {'(':1,')':-1}

  for (i of s){
    sum+=Number(obj[i])

    if (sum <= -1){
      break
    }
  }
  if (sum!==0){
    answer=false
  }
  return answer;
}
