function solution(n) {
    var answer = 0;
    //n 을 a개의 연속으로 표현하려면 나누기 a 하면 됨ㅁ 
    // 표현방법 수 리턴 
    
    // 홀수 -> .0나와야되고 짝수로 나누면 .5
    let devide=1
    let result=0
    for (let i =1; i<=n;i++){
        if (i%2===1 && n%i===0){
        answer++
        }else if(i%2===0 && n%i===0.5){
            answer++
        }
    }
    
//     while(devide*result<=n){
//         if(devide){
            
//         }
//         devide++
//         result=n/devide
        
            
//     }
    
    return answer;
}