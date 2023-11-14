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

//정답 2
// function solution(name) {
//   let answer = 0;
//   let min_move = name.length - 1;

//   [...name].map((n, i) => {
//     answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
//     let idx = i + 1;

//     // 연속되는 A의 개수 count
//     while (idx < name.length && name[idx] === 'A') {
//       idx++;
//     }

//     min_move = Math.min(
//       min_move,
//       i * 2 + name.length - idx,
//       i + 2 * (name.length - idx),
//     );
//   });

//   return answer + min_move;
// }

//정답 2
function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}

// function solution(name){
//     var answer=0
//     let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     alpha=alpha.split('')
//     let reverseAlpha=[...JSON.parse(JSON.stringify(alpha)).reverse()]   //깊은복사 후 거꾸로
//     console.log(alpha,reverseAlpha)
//     let tmp=[]
//     for ( i in name){
//         let goal=alpha.indexOf(name[i])
//         let goal2= reverseAlpha.indexOf(name[i])+1
//         console.log(goal,goal2)
//         tmp.push(Math.min(goal,goal2))
//     }
//     let count=0
//     let pointer=0
//     // tmp.findIdex() 00089. 00890 00009 08090 
//     count=tmp.reduce((x,y)=> x+y,0) //합 구하기
//     let normal=tmp.findIndex((el)=>el!=0)
//     let normalZero=tmp.findIndex((el)=>el==0)
//     let reversetmp=[...JSON.parse(JSON.stringify(tmp)).reverse()]
//     let reverse=reversetmp.findIndex((el)=>el!=0)
//     let reverseZero=reversetmp.findIndex((el)=>el==0)
//     console.log(tmp,normal,reverse,count)
//     count+=tmp.length-1
//     console.log(count)
//     if (normal !=-1 && reversetmp!=-1){ //0이 있다고 나온다면
//         maxminus=Math.max(normal,reverse)
//         console.log(maxminus)
//         count-=maxminus
//     }
    
//     // let reverse=reversetmp.findIndex((el)=>el!=0)
//     // if 
//     console.log(count)
//     answer=count
//     return answer
// }