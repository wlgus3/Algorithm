function solution(tickets) {
    const n = tickets.length + 1 // 방문해야하는 총 공항 수 
  const graph = {}
  for(let [start, end] of tickets) {
    if(!graph[start]) {
      graph[start] = []
    }
    if(!graph[end]) {
      graph[end] = []
    }
    // 2번 테스트 케이스(런타임에러)를 통과하기 위해서 end지점도 빈 배열을 생성해줘야합니다.
    graph[start].push(end)
    graph[start].sort()
  }

  const answer = []
  const visited = new Set()
  const dfs = (current, route) => {
    if(route.length === n) {
      answer.push([...route])
      return
    }
    for(let i = 0; i < graph[current].length; i++) {
      const des = graph[current][i]
      const ticket = `${current}#${des}`
      if(!visited.has(ticket) || (i >= 1 && ticket === `${current}#${graph[current][i-1]}`)) {
        // 중복된 티켓팅도 경로를 탐색할 수 있도록 만든 추가 조건문입니다. 1번 테스트 케이스를 위한거 입니다.
        visited.add(ticket)
        route.push(des)
        dfs(des, route)
        route.pop()
        visited.delete(ticket)
      }
    }
  }
  dfs("ICN", ["ICN"])

  return answer[0]
}
