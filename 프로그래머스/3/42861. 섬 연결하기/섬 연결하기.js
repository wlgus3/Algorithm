// 섬 개수 n 최대 100 , costs길이 조합 수 nC2 이하 
// 프림 알고리즘(Prim Algorithm)
function solution(n, costs) { 
    let graph = {};

    // 그래프 생성
    for(let cost of costs){
        let [start, end, weight] = cost;
        if(graph[start] === undefined)
            graph[start] = [[end, weight]];
        else
            graph[start].push([end, weight]);

        if(graph[end] === undefined)
            graph[end] = [[start, weight]];
        else
            graph[end].push([start, weight]);
    }

    // 정점 한개 선택 후 최소 간선으로 연결된 정점 찾자 
    let init_node = 0;  // 시작 노드 0
    let candidate = graph[init_node]; // 시작 노드 0
    const visited = {}; // 시작점은 방문한 것으로 정하자 
    visited[init_node] = true;

    let answer = 0;
    while(candidate.length != 0){

        candidate.sort((a,b)=>b[1]-a[1]); // cost 기준 내림차순으로 정렬 
        let [node, cost] = candidate.pop(); // 가장 작은 것 뽑기

        if(!visited[node]){
            visited[node] = true; // 방문
            answer+=cost; // cost 더하고
            candidate = [...candidate, ...graph[node]]; // 경로 더해주자
        }
    }
    return answer;
}