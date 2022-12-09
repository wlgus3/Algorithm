function solution(common) {
    var answer = 0;
    var length = common.length
    if((common[1]-common[0])===(common[2]-common[1])){
        answer=common[length-1]+common[1]-common[0]
    }
    else {
        answer= common[length-1]*common[1]/common[0]
    }
    return answer;
}