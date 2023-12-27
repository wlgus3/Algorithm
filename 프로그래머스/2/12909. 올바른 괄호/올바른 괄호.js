function solution(s){
  var answer = true;
    
  while(s.includes('()')){
    s=s.split('()').join('')
  }
  if(s!=''){answer=false}
  return answer;
    //정확도o, 시간초과로 실패 
}
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

// function solution(s){
//     let answer=true
//     let arr=s.split('')
//     let stack=[]
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]=='('){
//             stack.push(')')
//         }else{
//             if(stack.length==0){
//                 answer=false
//                 break
//             }else{
//                 stack.pop()
//             }
//         }
//     }
//     // arr.forEach((el)=>{
//     //     if(el=='('){
//     //         stack.push(')')
//     //     }else{
//     //         if (stack==[]){
//     //             answer=false
//     //             return answer;
//     //         }else if(el==stack[stack.length-1]){
//     //             stack.pop()
//     //         }else{
//     //             answer=false
//     //             return answer;
//     //         }
//     //     } 
//     // })
//     // if (stack!==[]){answer=false}    //이건 왜 안될까?
//     if (stack.length>0){answer=false}
    
    
//     return answer
// }