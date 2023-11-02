# 4:30~
# ICN공항에서 출발, 방문하는 공항 경로를 []담아서 출력 
# tickects=[[출발,도착],[출,도],...] 3~10000개 주어진 항공권 모두 사용,
# 가능한 경로가 2개 이상이면 알파벳 순서가 앞서는 경로를 return 

# tickets순회하면서 graph ={출발지=[도착지,도착지2], 출발지2:[],...} 만들어준다.
# dfs로 들어가면서
# from collections import deque
# def dfs(graph,cur_node,path):
#     path.append(cur_node)
#     print(cur_node,path)
#     if cur_node not in graph or len(graph[cur_node])==0:
#         return path.copy()
#     else:
#         next_node=graph[cur_node].pop()
#         return dfs(graph,next_node,path)
    

# def solution(tickets):
#     answer = ["ICN"]
#     graph={}
#     for t in tickets:
#         [departure,destination]=t
#         if departure in graph:
#             graph[departure].append(destination)
#         else:
#             graph[departure]=[destination]
#     for g in graph:
#         graph[g]=sorted(graph[g],reverse=True)
        
#     copygraph=graph.copy()
#     answer=dfs(copygraph,'ICN',[])
#     return answer

def solution(tickets):
    routes = {}
    for t in tickets:
        routes[t[0]] = routes.get(t[0], []) + [t[1]]
    for r in routes:
        routes[r].sort(reverse=True)
    stack = ["ICN"]
    path = []
    while len(stack) > 0:
        top = stack[-1]
        if top not in routes or len(routes[top]) == 0:
            path.append(stack.pop())
        else:
            stack.append(routes[top][-1])
            routes[top] = routes[top][:-1]
    return path[::-1]