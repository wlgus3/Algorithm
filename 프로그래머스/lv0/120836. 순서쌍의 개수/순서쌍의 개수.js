function solution(n) {
    var answer = 0;
    let list = []
    for (i=1; i<=n/2 ; i++){
        let dividen = n/ i
        if (Number.isInteger(dividen)){
            if (list.includes(i)===false){
                list.push(i)
            }
            if (list.includes(dividen)===false){
                list.push(dividen)
            }
        } 
    }
    
    answer=list.length
    if ( n===1){
        answer=1
    }
    // 20 6   => 1 20 , 2 10 , 4 5 *2
    return answer;
}