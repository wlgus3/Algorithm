// function solution(name) {
//     var answer = 0;
//     let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let arr=alphabet.split('')
//     let nameArr=name.split('')
    
//     for(let i=0; i<name.length;i++){
//         let index=arr.findIndex(el=>el===nameArr[i])
//         if( index<=arr.length-index){
//             answer+= index
//         }else{
//             answer+= arr.length-index
//         }
//     }
//     //A 여러개 연속해서 있다면
//     let Aarr=[]
//     for (let i=0;i<nameArr.length;i++){
//         if(nameArr[i]==='A'){
//             Aarr.push(1)
//         }else{
//             Aarr.push(0)
//         }
//     }
    
    
//     let Acount=Math.max(...Aarr)
//     console.log(Acount)
    
//     answer=answer+name.length-1-Acount
    
//     return answer;
// }


function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === 'A') {
      idx++;
    }

    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx),
    );
  });

  return answer + min_move;
}


// function solution(name){
//     var answer=0
//     let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     alpha=alpha.split('')
//     console.log(alpha)
//     let tmp=[]
//     for ( i in name){
//         let goal=alpha.indexOf(name[i])
//         console.log(goal)
//         tmp.push(goal)
//     }
//     let count=0
//     let pointer=0
//     // tmp.findIdex() 00089. 00890 00009 08090 
//     count+=Math.sum(tmp)
//     print(count)
//     // let normal=tmp.findIndex((el)=>el!=0)
//     // let reversetmp=[...tmp.reverse()]
//     // let reverse=reversetmp.findIndex((el)=>el!=0)
//     // if 
    
    
//     return answer
// }