function solution(clothes) {
    let answer = 1;
    let obj={}
    for ( i of clothes){
        if (Object.keys(obj).includes(i[1])){
            obj[i[1]].push(i[0])
        }else{
            obj[i[1]]=[i[0]]
        }
    }
    for (j in obj){
        answer=answer*(obj[j].length+1)
    }
    return answer-1;
}