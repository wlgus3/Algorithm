# from collections import deque, defaultdict

# def solution(n, wires):
#     wires = [[i-1, j-1] for i, j in wires]
#     routes = [[] for _ in range(n)]
#     vals = [defaultdict(int) for _ in range(n)]
#     for i, j in wires:
#         routes[i].append(j)
#         routes[j].append(i)
#     tovisit = deque(range(n))
#     minv = n
#     while len(tovisit) > 1:
#         tovisit.rotate()
#         cn = tovisit[-1]
#         if len(routes[cn]) == len(vals[cn])+1:
#             tovisit.pop()
#             v = 1
#             for i in routes[cn]:
#                 if not vals[cn][i]:
#                     nn = i
#                 v += vals[cn][i]
#             vals[nn][cn] = v
#             minv = min(minv, abs(n-2*v))
#     return minv

# 0636~
#전선중 하나를 끊어서 두 전력망으로 나누는데, 최대한 수가 비슷하게 나누려 하는데 두 송전탑 개수 차이 반환하라 

# n= 송전탑수 max200 / wires=[[송전탑1,송전탑2],[],...] max n-1길이 

# 연결중 하나를 뺄건데 
# 조합으로 wires에서 wires길이-1 개를 뽑음 혹은 하나만 제거니까 idx=0~ 하나씩 늘려가며 무시할 수도 있다.
#연결 하나 빼고 그래프 정보를 확보하고 트리 순회를 하면서 두 값을 찾는다.[x,y ] 그리고 차이를 구한다.

from itertools import combinations
from collections import deque
import math
def dfs(node,graph,visited,l):
        q=deque()
        q.append(node)
        visited.append(node)
        while q:
            cur_node=q.popleft()
            if cur_node in graph:
                for next in graph[cur_node]:
                    if next not in visited:
                        l+=1
                        visited.append(next)
                        q.append(next)
        return l
        # if node not in visited:
        #     for z in graph[node]:
        #         q.append(z)
        #         visited.append(z)
        
def solution(n, wires):
    combiWires=list(combinations(wires, len(wires)-1))
    # print(combiWires)
    answer=n-2
    for i in combiWires:
        graph={}
        for connect in i:
            [node1,node2]=connect
            if node1 in graph:
                graph[node1].append(node2)
            else:
                graph[node1]=[node2]
            if node2 in graph:
                graph[node2].append(node1)
            else:
                graph[node2]=[node1]
        # print(graph)
        visited=[]
        length=[]
        for n in graph:
            if n not in visited:
                length.append(dfs(n,graph,visited,1))
        # print(length,visited)
        if len(length)==2:
            diff= ((length[0]-length[1])**2)**(1/2)
            answer=min(answer,diff)
            
        
        
        
    return answer










