function solution(n, s) {
    let answer = [];
    let medium = Math.floor(s/n)
    let rest = s%n
    
    let element = medium
    if(medium===0)return [-1]
    for(let i=0 ; i<n ;i++){
        answer.push(element)
        if(i+rest+1===n){
            element+=1 
        }
    }
    console.log(medium , rest)
    return answer;
}