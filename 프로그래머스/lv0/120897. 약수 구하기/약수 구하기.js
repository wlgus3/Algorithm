function solution(n) {
    var answer = [];
    let i =1
    while( i<= n){
        if (n%i===0){
            answer.push(i)
        } i+=1
    }
    return answer;
}