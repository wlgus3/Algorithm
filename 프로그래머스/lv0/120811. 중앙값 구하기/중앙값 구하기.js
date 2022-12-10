function solution(array) {
    var answer = 0;
    arraySort=array.sort((a,b)=>{
        if(a<b){return 1}
        if(a>b){return -1}
        else{return 0}
    })
    answer=arraySort[(array.length-1)/2]
    return answer;
}