// function solution(n,a,b)
// {
//     var answer = 0;
//     let count = Math.log2(n)
//     let A=a
//     let B=b
//     //처음부터 1 차이 
//     //이후에는 동일한거 아닌가?
    
//     if(a-b==1 || a-b==-1){
//         if(Math.round(a/2)===Math.round(b/2)){
//             return answer=1
//            }
//         else{
//             return answer=2
//         }
//     }else{
//         for(let i=1 ;i<=count;i+=1){

//             A=Math.round(A/2) 
//             B=Math.round(B/2)
            
//             if(A+1==B || A-1==B){
//                 if(Math.round(A/2) )
//                 return answer= i+1
//                 break
//             }
//         }
//     }

//     return answer;
// }
function solution(n,a,b) {
    var answer = 0;

    if (a > b) {
        let i = b;
        b = a;
        a = i;
    }

    while(a%2===0 || b-a!==1) {
        answer += 1;
        if (a%2 !== 0) {
            a += 1;
        }
        if (b%2 !== 0) {
            b += 1;
        }    
        a /= 2;
        b /= 2;
    }
    return answer+1;
}