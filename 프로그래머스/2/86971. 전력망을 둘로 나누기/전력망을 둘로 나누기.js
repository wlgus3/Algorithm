// //송전탑 수 2<= n <=100
// //연결배열 wires
// //전력망 네트워크는 반드시 하나의 트리형태
// //하나의 연결을 끊어서 두 통신망의 송전탑 수가 최대한 비슷하도록 나누고싶을 때 각 통신망 송전탑 개수의 차이 return 

// function solution(n, wires) {
//     let answer = -1
//     //wires 순회하며 하나씩 끊어보기
//     let minDiff=n-2
//     for(let i =0; i<n-1;i++){ //돌아가면서 연결 제외함
//         let graph ={}
//         for(let j=0 ;j <n-1; j++){
//             if (j!=i){
//                 let [left, right]=wires[j]
//                 if(!graph[left]){
//                     graph[left]=[]
//                 }if(!graph[right]){
//                     graph[right]=[]
//                 }
//                 graph[left].push(right)
//                 graph[right].push(left)
//             }
//         }
//         let connection1Length=dfs(1,graph).length   //한쪽연결의 길이를 구한다-> 한쪽 연결 길이만 알면 두 연결의 차이는 구할 수 있기 때문
//         let nowDiff=Math.abs(n-connection1Length*2)
//         minDiff=Math.min(minDiff,nowDiff)
//     }
    
//     //끊고 한쪽에 들어가도록 해서 끝나면 한 트리의 노드 개수 나옴-> 나머지 노드 개수도 구할 수 있음 
    
//     answer=minDiff
//     return answer;
// }

// function dfs(now,graph){    //dfs로 하나의 연결만 구해서 [...]형태로 반환하는 함수.
//     visited=[now]
//     queue=[now]
//     if(!graph[now]) return [now]    //만약 현 노드가 아무 연결 없이 혼자라면 현재 연결된 트리인 [now] 반환
//     while (queue.length>0){
//         let curNode=queue.shift()
        
//         for( node of graph[curNode]){
//             if(!visited.includes(node)){
//                 visited.push(node)
//                 queue.push(node)
//             }
//         }
//     }
//     // for(i of graph[now]){
//     //     if (!visited[i]){
//     //         length++
//     //         dfs(graph,now, length,visited)
//     //     }
//     // }
//     return visited
// }




//ㅈㅎ님
function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER; // 결과값을 저장할 변수, 초기값은 무한대
    let visited = Array.from({ length: n + 1 }, () => 0); // 방문 여부를 저장할 배열
    let count = 1; // 그룹 내 노드 개수를 저장할 변수
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 노드 간 연결 정보를 저장할 이차원 배열

    // 주어진 연결 정보를 그래프에 반영
    for (let [a, b] of wires) {
        graph[a][b] = 1;
        graph[b][a] = 1;
    }

    // 깊이 우선 탐색 (DFS) 함수 정의
    function DFS(L) {
        for (let i = 1; i <= n; i++) {
            if (visited[i] === 0 && graph[L][i] === 1) {
                visited[L] = 1;
                count++;
                DFS(i);
                visited[L] = 0;
            }
        }
    }

    for (let [a, b] of wires) {
        // 연결 정보를 제거하여 두 그룹으로 나누기
        graph[a][b] = 0;
        graph[b][a] = 0;
        count = 1; // 그룹 내 노드 개수 초기화
        DFS(1); // DFS 함수를 호출하여 그룹 내 노드 개수 계산

        // 연결 정보를 복원하고, 두 그룹의 노드 수 차이 계산
        graph[a][b] = 1;
        graph[b][a] = 1;
        answer = Math.min(answer, Math.abs(n - count - count)); // 결과값 업데이트
    }

    return answer; // 가장 작은 두 그룹의 노드 수 차이 반환
}