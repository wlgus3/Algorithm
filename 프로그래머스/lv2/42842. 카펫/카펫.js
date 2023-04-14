function solution(brown, yellow) {
    var answer = [];
    //8= 3*2+3*2-4= 10
    //24= 16+12-4=24
    //옐로우로 곱의 종류 배열 구하기
    let brownPair=(brown+4)/2

    for (let i=1; i<=yellow; i++){
        if(yellow===1){
            answer=[3,3]
            break
        }
        else if(yellow%i===0){
            //나눴을 때 나머지 0이면- 
            let sum= i+ yellow/i
            // console.log(sum)
            if (sum+4===brownPair){
                answer.push(i+2)
                answer.push(yellow/i+2)
                answer= [ yellow/i+2,i+2]
                break
            }
        }
    }
    
    return answer;
}