//송전탑 수 2<= n <=100
//연결배열 wires
//전력망 네트워크는 반드시 하나의 트리형태
//하나의 연결을 끊어서 두 통신망의 송전탑 수가 최대한 비슷하도록 나누고싶을 때 각 통신망 송전탑 개수의 차이 return 

function solution(n, wires) {
    let answer = -1
    //wires 순회하며 하나씩 끊어보기
    let minDiff=n-2
    for(let i =0; i<n-1;i++){ //돌아가면서 연결 제외함
        let graph ={}
        for(let j=0 ;j <n-1; j++){
            if (j!=i){
                let [left, right]=wires[j]
                if(!graph[left]){
                    graph[left]=[]
                }if(!graph[right]){
                    graph[right]=[]
                }
                graph[left].push(right)
                graph[right].push(left)
            }
        }
        // console.log(graph)
        // let visited= Array(n).fill(false)
        // let length=0
        // let connection1length= dfs(graph,'1',length,visited)
        // let diff= dfs(i,wires,n)
        
        let connection1=dfs(1,graph).length
        let nowDiff=Math.abs(n-connection1*2)
        minDiff=Math.min(minDiff,nowDiff)
        // console.log('diff',diff,minDiff)
    }
    
    //끊고 한쪽에 들어가도록 해서 끝나면 한 트리의 노드 개수 나옴-> 나머지 노드 개수도 구할 수 있음 
    
    answer=minDiff
    return answer;
}

function dfs(now,graph){
    visited=[now]
    queue=[now]
    if(!graph[now]) return [now]
    while (queue.length>0){
        let curNode=queue.shift()
        
        for( node of graph[curNode]){
            if(!visited.includes(node)){
                visited.push(node)
                queue.push(node)
            }
        }
    }
    // for(i of graph[now]){
    //     if (!visited[i]){
    //         length++
    //         dfs(graph,now, length,visited)
    //     }
    // }
    return visited
}

// function dfs(exceptIdx, wires, n){   //dfs 1차 시도
//     let visited= Array(n).fill(false)
//     let connect1=0
//     for( let j=0 ; j<n; j++){
//         if(j!=exceptIdx){
//             let [left,right]=wires[j]
//             if(connect1==0){
//                 visited[left-1]=true
//                 visited[right-1]=true
//                 connect1+=2
//             }
//             else if( ( visited[left-1]&&!visited[right-1] ) || ( visited[right-1]&&!visited[left-1] )    ){
//                 visited[left-1]=true
//                 visited[right-1]=true
//                 connect1+=1
//             }
//         }
//     console.log(connect1,n-connect1)
//     return Math.abs((n-connect1)-connect1)
//     }
    

// }