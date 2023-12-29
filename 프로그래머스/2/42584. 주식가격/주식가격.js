function solution(prices) {
    var answer = [];
    for (let i=0;i<prices.length;i++){
        let count=1
        for(let j=i+1 ;j<prices.length;j++){
            if (j!=prices.length-1 && prices[i]<=prices[j]){
                count++
            }else{
                answer.push(count)
                break
            }
            // console.log(count)
        }
        // console.log(i,answer,count)
    }
    answer.push(0)
    return answer;
}


//
// function solution(prices) {
//     const answer = [];
//     for (let i = 0; i < prices.length; i++) {
//         let stack = 0;
//         for (let j = i + 1; j < prices.length; j++) {
//             stack++;
//             if (prices[i] > prices[j]) {
//                 break;
//             }
//         }
//         answer.push(stack);
//     }
//     return answer;
// }