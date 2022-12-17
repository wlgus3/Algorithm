function solution(numbers, k) {
    var answer = 1;
    for(i=0;i<k-1;i++){ //한번 덜해야함 시작이 1번째이기에 
        answer+=2
        if(answer>numbers.length){
            answer-=numbers.length
        }
    }
    return answer;
}