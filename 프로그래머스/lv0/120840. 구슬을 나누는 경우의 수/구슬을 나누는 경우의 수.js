

// function solution(a, b) {
//   var answer = 1;

//   for (let i=balls;i>balls-share;i--){
//     answer=answer*i
//   }
//     for (let j=1; j<=share;j++){
//       answer=answer/j
//     }
//   return parseInt(answer);
// }

function factorial(n){
    let bigN = BigInt(n);
    
    if(bigN === BigInt(1) || bigN === BigInt(0)){
        return BigInt(1);
    }
    
    return bigN * factorial(bigN - BigInt(1));
}

function solution(balls, share) {
    const n = balls;
    const m = share;
    
    return factorial(n) / (factorial(n - m) * factorial(m));  
}