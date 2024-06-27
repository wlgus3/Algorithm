
//
function solution(begin, target, words) {
    // const visited =Array(words.length).fill(false)
    const visited = {};
    visited[begin]=0
    const queue=[begin]
    while(queue.length >0){
        const cur= queue.shift()
        if (cur===target) break //이미 타겟이 도착했다면 break
        for(let w of words){
            if(isConnected(w, cur) && !visited[w]){
                visited[w] =visited[cur]+1  //변경횟수를 누적한다
                queue.push(w)
            }
        }
    }
    console.log(visited)
    return visited[target]? visited[target]:0
    
}

const isConnected = (str1, str2) => { //알파벳 몇 개 다른지 검사, 1개만 다른 단어만 판별
    let count = 0;
    const len = str1.length;

    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) count++;
    }
    return count === 1 ? true : false;
};







