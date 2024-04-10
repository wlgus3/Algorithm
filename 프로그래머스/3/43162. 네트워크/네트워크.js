// function solution(n, computers) {
//     let answer = 0;
//     //그래프 그리기 
//     let graph={}
//     for(let i=0 ;i<n; i++){
//         graph[i]=computers[i]
//     }
//     //방문여부 기록할 visited arr
//     let visited=Array(n).fill(false)
    
//     for(let j=0 ;j<n;j++){
//         if(!visited[j]){
//             dfs(j)
//             answer++
//         }
//     }
    
//     //dfs 정의 -> 현 노드를 받고 해당 노드에 연결된 모든 네트워크를 순회하며 visited 처리
//     function dfs(now){
//         visited[now]=true
//         if(graph[now]){
//             for(let node=0;node<n;node++){// node: 컴퓨터 번호
//                 if(graph[now][node]==1 &&!visited[node]){    //연결되어 있다면
//                     dfs(node)
//                 }                
//             }
//         }
//         return
//     }
//     return answer;
// }


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


//24/04/11
function solution(n, computers){
    let answer=0
    const check =Array(n).fill(false)
    
    function dfs(idx){
        // if(check[idx]){
            // return
        // }
        check[idx]=true
        computers[idx].forEach((val,index)=>{
            if(val===1&& !check[index]){
                dfs(index)
            }
        })
    }
    
    for (let i=0; i<n;i++){
        if(!check[i]){
            dfs(i)
            console.log(check)
            answer++
        }
    }
    
    return answer
}
