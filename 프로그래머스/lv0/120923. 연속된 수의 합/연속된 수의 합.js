function solution(num, total) {
    var answer = [];
    //연속된 수 n개 담아서 total인 n개의 배열을 반환 
    // n부터 num개 더하면 토탈  n*num+  =total-(num+1)*num/2  
    let n= (total-(num)*(num-1)/2 )/num
    for (i=n;i<num+n;i++){
        answer.push(i)
    }
    return answer;
}