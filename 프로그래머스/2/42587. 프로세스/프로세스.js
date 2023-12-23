// //큐는 선입선출 
// //priorities.length<=100 이기에 시간복잡도 자유로움
// function solution(priorities, location) {
//     let answer = 0;
//     let tmp=[...priorities]
//     let queue=[]
//     priorities.forEach((el,idx)=>{
//         queue.push([el,idx])
//     })
//     // console.log(queue)
//     let doneP=[]
//     let maxP=Math.max(tmp)
//     while(tmp.length>0){
//         if(queue[0][0]==maxP){
//             let now=queue.shift()
//             doneP.push(now)
//             if( now[1]==location){
//                 answer=doneP.length()+1
//                 break
//             }
//             tmp.splice(now[1],1)
//             maxP=Math.max(tmp)
            
//         }else{
//             queue.push(queue.shift())
//         }
//     }
    
//     return answer;
// 

function solution(priorities, location) {
    const copyPriorities = [...priorities]
    const dataset = priorities.map((priority,idx)=>({priority,idx}))
    let excuteCount = 0

    while(dataset.length !== 0){
        const maxValue = Math.max(...copyPriorities)
        const {priority,idx} = dataset.shift()
        if(priority >= maxValue){
            excuteCount++
            copyPriorities[idx] = 1
            if(idx === location){
                break;
            }
        }
        else{
            dataset.push({priority,idx})
        }
    }
    return excuteCount
}