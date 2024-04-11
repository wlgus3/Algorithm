// function solution(prices) {
//     var answer = [];
//     for (let i=0;i<prices.length;i++){
//         let count=1
//         for(let j=i+1 ;j<prices.length;j++){
//             if (j!=prices.length-1 && prices[i]<=prices[j]){
//                 count++
//             }else{
//                 answer.push(count)
//                 break
//             }
//         }
//     }
//     answer.push(0)
//     return answer;
// }



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

//https://kangwlgns.tistory.com/30


function solution(prices){
    let answer=Array(prices.length).fill(0)
    prices.forEach((el,idx)=>{
        if(idx===prices.length-1) {
            answer[idx]=0
            return
        }
        let count =1
        for(let i= idx+1; i<prices.length; i++){
            if(prices[i] < el) break
            count++
            if(i === prices.length-1) count-=1
        }
        // answer.push(count)
        answer[idx]=count
    })
    
    return answer
}