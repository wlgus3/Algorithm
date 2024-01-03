function solution(sizes) {
    let answer = 0;
    let x=0
    let y=0
    for( s of sizes ){
        s.sort((a,b)=>a-b)
        if (s[0]>x){x=s[0]}
        if (s[1]>y){y=s[1]}
    }
    answer=x*y
    return answer;
}