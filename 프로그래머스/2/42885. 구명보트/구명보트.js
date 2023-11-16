function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a-b)
    // console.log(people)
    let heavy=people.length-1
    let light=0
    while (light<=heavy){
        if (people[heavy] + people[light]>limit ){
            heavy-=1
            answer+=1
        }else{
            heavy-=1
            light+=1
            answer+=1
        }
    }
    return answer;
}