// function solution(n, computers) {
//     let answer = 0;
//     let graph={}
//     for(let i=0 ;i<n; i++){
//         graph[i]=computers[i]
//     }
//     console.log(graph)
//     visited=Array(n).fill(false)
//     console.log(visited)
//     function dfs(now){
//         return
//     }
    
//     dfs(0)
    
//     return answer;
// }


function solution(n, computers) {
    const visited = new Array(n).fill(0)
    let count = 0;

    for (let i=0; i<visited.length; i++) {
        if (visited[i] === 1) continue;

        count += 1;
        dfs(computers, visited, i);
    }

    return count;
}

function dfs(map, visited, node) {
    visited[node] = 1;

    for (let i=0; i<map[node].length; i++) {
        if ( map[node][i] && visited[i] === 0) {
            dfs(map, visited, i);
        }
    }
}