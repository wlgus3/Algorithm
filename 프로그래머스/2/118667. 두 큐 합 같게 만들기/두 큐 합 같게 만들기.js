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
function solution(q1, q2) {
    let q1s = q1.reduce((acc, curr) => acc + curr, 0)
    let q2s = q2.reduce((acc, curr) => acc + curr, 0)
    let limit = q1.length * 3
    let dest = parseInt((q1s + q2s) / 2) // 목표값
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