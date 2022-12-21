function solution(my_string) {
    var answer = 0;
    let list=my_string.split('')
    for(i of list){
        if (isNaN(i)===false){
            answer+= Number(i)
        }
    }
    return answer;
}