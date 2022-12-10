function solution(num_list) {
    var answer = [];
    for(i=0; i<num_list.length;i++){
        answer.unshift(num_list[i])
    }
    return answer;
}