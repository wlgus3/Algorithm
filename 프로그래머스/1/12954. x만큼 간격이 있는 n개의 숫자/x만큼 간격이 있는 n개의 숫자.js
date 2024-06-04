function solution(x, n) {
    let answer = [];
    let count=0
    while(count<n){
        count++
        answer.push(x*count)
    }
    return answer;
}