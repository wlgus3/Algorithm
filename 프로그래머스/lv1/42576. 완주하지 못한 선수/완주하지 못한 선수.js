function solution(participant, completion) {
    var answer = '';
    //동명이인 있을 수 있단 게 포인트 
    participant.sort()
    completion.sort()
    for (let i=0;i<participant.length;i++){

        if(participant[i]===completion[i]){
            continue
        }else{
            answer=participant[i]
            break
        }
    }
    
    return answer;
}