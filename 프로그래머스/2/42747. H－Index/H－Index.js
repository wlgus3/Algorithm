function solution(citations) {
    //h번 이상 인용된 논문이 h편 이상이고 나머지논문이 h번 이하
    // 결국 h는 최대값임 
    var answer = 0;
    
    citations.sort((a,b)=>b-a)//내림차순
    for ( let i=0 ; i<citations.length; i++){
        let casemax=Math.min(citations[i],i+1)
        answer=answer<casemax?casemax:answer
    }
    return answer;
}