# from collections import deque

# def solution(begin, target, words):
#     #비긴에서 타겟의 단어와 똑같이 변화해야 하는데 한 번에 하나의 알파벳만 변환 가능하고 words에 있는 단어들로만 거쳐 가야한다.
#     if target not in words:
#         return 0
#     #최소단계를 말해달라고 했으니 DFS 로 차례로 탐색할 것임 
#     #먼저 그래프를 만든다.
#     newlist=words[:]
#     newlist.append(begin)
#     graph={}    #연결 그래프 제작
#     wordlength=len(begin)
#     for i in newlist:
#         graph[i]=[]

#     for i in newlist:
#         for j in newlist:
#             if i !=j:
#                 list1=list(i)
#                 list2=list(j)
#                 count=0
                
#                 for z in range(wordlength): #글자 순서대로 일치여부 확인하고 1글자만 다르면 그래프에 기록
#                     if list1[z] != list2[z]:
#                         count+=1
#                 if count==1:
#                     graph[i].append(j)
#     print(graph)
#     q= deque()
#     q.append(begin)
#     visited=[begin]
#     count=0
#     while q:
#         nownode=q.popleft()
#         print(nownode,count)
#         if nownode == target:
#             answer=count
#             break
#         count+=1                      #BFS 실패 : 레벨 하나를 내려갈 때마다 count+를 해야하는데 q에서 popleft할때마다 카운트가 하나씩 증가.
#         for node in graph[nownode]:
#             if node not in visited:
#                 visited.append(node)
#                 q.append(node)
                    
#     return answer


# # DFS
# from collections import defaultdict

# def count_different_chars(word1, word2):
#     diff_count = 0

#     for i in range(len(word1)):
#         if word1[i] != word2[i]:
#             diff_count += 1

#     return diff_count

# def solution(begin, target, words):
#     answer = 0

#     g = defaultdict(list)

#     for i in words + [begin]:
#         for y in words:
#             if i == y:
#                 continue
#             if count_different_chars(i, y) == 1:
#                 g[i].append(y)

#     def dfs(word, trace):
#         if word == target:
#             return len(trace)

#         if word in trace:
#             return 0

#         results = []
#         for w in g[word]:
#             r = dfs(w, trace + [word])
#             if r != 0:
#                 results.append(r)
#         return min(results) if results else 0

#     r = dfs(begin, [])
#     return r




# from collections import deque
        
# def solution(begin, target, words):
#     #비긴에서 타겟의 단어와 똑같이 변화해야 하는데 한 번에 하나의 알파벳만 변환 가능하고 words에 있는 단어들로만 거쳐 가야한다.
#     if target not in words:
#         return 0
#     #최소단계를 말해달라고 했으니 DFS 로 차례로 탐색할 것임 
#     #먼저 그래프를 만든다.
#     newlist=words[:]
#     newlist.append(begin)
#     graph={}    #연결 그래프 제작
#     wordlength=len(begin)
#     for i in newlist:
#         graph[i]=[]

#     for i in newlist:
#         for j in newlist:
#             if i !=j:
#                 list1=list(i)
#                 list2=list(j)
#                 count=0
                
#                 for z in range(wordlength): #글자 순서대로 일치여부 확인하고 1글자만 다르면 그래프에 기록
#                     if list1[z] != list2[z]:
#                         count+=1
#                 if count==1:
#                     graph[i].append(j)
    
    
#     answer=0
#     visited=[]
#     count=-1
    
#     def dfs(node, trace):
#         print(trace)
#         if node == target:  #현 노드가 타겟이면 trace길이 반환
#             return len(trace)

#         if node in trace:   #그냥 순회중이면 0
#             return 0

#         results = []
#         for child in graph[node]:   #현 노드 자식 순회
#             r = dfs(child, trace + [node]) 
#             print(r)
#             if r != 0:
#                 results.append(r)
#         if results!=[]: 
#             return min(results) 
#         else: return 0   #result가 존재하면 
    
#     r=dfs(begin,[])
#     return r


#     def bfs (node):
#         print(node)
#         nonlocal count
#         count+=1
#         if node == target:
#             nonlocal answer
#             answer=count

#         visited.append(node)
#         if node in graph:
#             for childnode in graph[node]:
#                 if childnode not in visited:#방문 전이면
#                     bfs(childnode)
    # return answer
                    

from collections import deque
        
def solution(begin, target, words):
    #비긴에서 타겟의 단어와 똑같이 변화해야 하는데 한 번에 하나의 알파벳만 변환 가능하고 words에 있는 단어들로만 거쳐 가야한다.
    if target not in words:
        return 0
    #최소단계를 말해달라고 했으니 DFS 로 차례로 탐색할 것임 
    #먼저 그래프를 만든다.
    newlist=words[:]
    newlist.append(begin)
    graph={}    #연결 그래프 제작
    wordlength=len(begin)
    for i in newlist:
        graph[i]=[]

    for i in newlist:
        for j in newlist:
            if i !=j:
                list1=list(i)
                list2=list(j)
                count=0
                
                for z in range(wordlength): #글자 순서대로 일치여부 확인하고 1글자만 다르면 그래프에 기록
                    if list1[z] != list2[z]:
                        count+=1
                if count==1:
                    graph[i].append(j)

    # 몇 단계 거치냐를 q 에 같이 쌓아주면 된다. 
    
    
    
    def bfs(graph,root):
        q= deque()
        count=0
        q.append((root, count))
        visited=[]
        
        while q:
            now=q.popleft()
            now_node=now[0]
            now_count=now[1]
            # print(now_node,now_count)
            visited.append(now_node)
            if now_node==target:
                return now_count
            elif graph[now_node]:
                for n in graph[now_node]:
                    if n not in visited:
                        q.append((n,now_count+1))
    
    
    result=0
    result=bfs(graph,begin)
    
    return result    
    
    
    
    
    
        
