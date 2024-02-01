function solution(n, computers) {
    let answer = 0;
    let graph={}
    for(let i=0 ;i<n; i++){
        graph[i]=computers[i]
    }
    // console.log(graph)
    visited=Array(n).fill(false)
    // console.log(visited)
    for(let j=0 ;j<n;j++){
        if(!visited[j]){
            dfs(j)
            // console.log(visited )
            answer++
        }
    }
    function dfs(now){
        visited[now]=true
        if(graph[now]){
            for(let node=0;node<n;node++){
                // console.log(node)//n:인덱스
                if(graph[now][node]==1){    //연결되어있음 
                    if(!visited[node]){dfs(node)}
                }                
            }
        }
        return
    }
    
    return answer;
}


// function solution(n, computers) {
//     const visited = new Array(n).fill(0)
//     let count = 0;

//     for (let i=0; i<visited.length; i++) {
//         if (visited[i] === 1) continue;

//         count += 1;
//         dfs(computers, visited, i);
//     }

//     return count;
// }

// function dfs(map, visited, node) {
//     visited[node] = 1;

//     for (let i=0; i<map[node].length; i++) {
//         if ( map[node][i] && visited[i] === 0) {
//             dfs(map, visited, i);
//         }
//     }
// }