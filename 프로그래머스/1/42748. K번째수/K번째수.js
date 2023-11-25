function solution(array, commands) {
    var answer = [];
    
    for( i of commands){
        let arr2=[...array]
        let tmp=arr2.slice(i[0]-1,i[1]).sort((a,b)=>a-b)
        // console.log(tmp)
        answer.push(tmp[i[2]-1])
        
    }
    return answer;
}