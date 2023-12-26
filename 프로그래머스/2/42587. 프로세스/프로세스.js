//큐는 선입선출 
//priorities.length<=100 이기에 시간복잡도 자유로움
// function solution(priorities, location) {
//     let answer = 0;
//     let tmp=[...priorities]
//     let queue=[]    //  [[중요도, 인덱스] ,[]...] 형태로 정리
//     priorities.forEach((el,idx)=>{
//         queue.push([el,idx])
//     })
//     // console.log(queue)
//     let doneP=[]
//     let maxP=Math.max(...tmp)   //let maxP=Math.max(tmp) ->이렇게쓰면 NaN
//     let count=0
//     while(answer==0){
//         let now=queue.shift()
//         if(now[0]==maxP){
//             doneP.push(now)
//             if( now[1]==location){
//                 answer=doneP.length
//                 break
//             }
//             // tmp.splice(now[1],1)
//             maxP=Math.max(...tmp)
//         }else{
//             queue.push(now)
//         }
//         // console.log(maxP,queue,doneP)
//         count++
//     }
//     return answer;
// }



// function solution(priorities, location) {
//     const copyPriorities = [...priorities]
//     const dataset = priorities.map((priority,idx)=>({priority,idx}))
//     let excuteCount = 0

//     while(dataset.length !== 0){
//         const maxValue = Math.max(...copyPriorities)
//         const {priority,idx} = dataset.shift()
//         if(priority >= maxValue){
//             excuteCount++
//             copyPriorities[idx] = 1
//             if(idx === location){
//                 break;
//             }
//         }
//         else{
//             dataset.push({priority,idx})
//         }
//     }
//     return excuteCount
// }


function solution(priorities,location){
    let answer=0
    //priorities.length<=100이기에 시간복잡도 비교적 자유로움 
    //[el,idx] 형태로 전부 정리
    let queue=[]
    priorities.forEach((el,idx)=>{
        queue.push([el,idx])
    })
    // console.log(queue)
    
    let sortedArr=priorities.sort((a,b)=>b-a)
    let maxIdx=0
    let done=[]
    while(queue.length>0){
        let front=queue.shift()
        if(front[0]==sortedArr[maxIdx]){ //queue의 맨 앞 값이 최대 값과 같으면
            done.push(front)
            if(front[1]==location){break}
            maxIdx++
        }else{
            queue.push(front)
        }
    }
    answer=done.length
    return answer
}