// function solution(queue1, queue2) {
//     let queue=[...queue1,...queue2]
//     let p1=0
//     let p2=queue1.length
//     let sum1=queue1
//     for (let i=0 ;i< 2*queue.length;i++){
//         console.log(i)
        
//     }
//     var answer = -2;
//     return answer;
// }
//기본적으로 합이 큰 큐에서 pop() 해서 작은 큐로 옯겨주는 방법
function solution(q1, q2) {
    //각 큐의 합 구해놓고
    let q1s = q1.reduce((acc, curr) => acc + curr, 0)
    let q2s = q2.reduce((acc, curr) => acc + curr, 0)
    //최악의 경우 q1 값 전부 q2로 옮겼다가 다시 q2에 하나만 두고 q1으로 옮기는 경우 
    let limit = q1.length * 3
    let dest = (q1s + q2s) / 2 // 목표값
    let d1 = 0
    let d2 = 0
    let tried = 0
    while (tried !== limit && q1s !== dest) {
        if (q1s < q2s) {
            q1.push(q2[d2])
            q1s += q2[d2]
            q2s -= q2[d2++]
        } else if (q1s > q2s) {
            q2.push(q1[d1])
            q2s += q1[d1]
            q1s -= q1[d1++]
        }
        tried += 1
    }
    return tried === limit ? -1 : tried
}