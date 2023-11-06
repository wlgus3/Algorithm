# from itertools import permutations

# def solution(k, dungeons):
#     answer = -1

#     dungeons_permutaion = []
#     for i in permutations(dungeons,len(dungeons)):  #던전방문 경우의 수 순열로 모두 정리
#         dungeons_permutaion.append(list(i))
#     #! 위 식을 아래와 같이 간단하게 표현할 수 있음 
#     #dungeons_permutaion= list(permutations(dungeons,len(dungeons)))
    
#     # print(dungeons_permutaion)

#     results=[]  #몇개의 던전 돌았는지 기록할 list
#     for case in dungeons_permutaion:    #각 케이스 돌면서 던전 개수 기록
#         count=0
#         stamina=k
#         for j in case:
#             if stamina>=j[0] and stamina-j[1]>=0:
#                 stamina-= j[1]
#                 count+=1
#             else: break
#         results.append(count)
#     # print(results)
#     answer= max(results)    #최대 던전개수 반환

#     return answer

# # a = [[80,20],[50,40],[30,10]]
# # permute = permutations(a,2)

# # print(list(permute))

# DFS로 풀기 
def solution(k,dungeons):
    maxdungeons=0
    # dfs(현 피로도, 총 던전수) 로 돌면서 max값 비교해서 최신화해줌 
    visited=[False]*len(dungeons)
    print(visited)
    def dfs(nowpower, dcount):
        nonlocal maxdungeons
        if dcount>maxdungeons:
            maxdungeons=dcount
        for idx, i in enumerate(dungeons):
            if visited[idx]==False and nowpower >= i[0]:
                visited[idx]=True
                dfs(nowpower-i[1],dcount+1)
                visited[idx]=False
        # for idx, j in enumerate(array):
        #     if nowpower>=j[0] :
        #         newarr2=array.copy()
        #         newarr2.pop(idx)
        #         dfs(nowpower-j[1], dcount+1 ,newarr2)
        #     else: return 
    # for index,i in enumerate(dungeons):
    #     if i[0]<=k:
    #         newarr=dungeons.copy()
    #         newarr.pop(index)
    #         dfs(k-i[1],1 ,newarr)
    dfs(k, 0)
    answer=maxdungeons
    return answer






