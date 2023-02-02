function solution(score) {
    var answer = [];
    const averageArr= score.map(el=>(el[0]+el[1])/2)
    let sorted = averageArr.slice().sort((a,b)=>b-a);
    return averageArr.map(v=>sorted.indexOf(v)+1);
}