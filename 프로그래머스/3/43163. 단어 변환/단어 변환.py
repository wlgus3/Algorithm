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
#     for i in newlist:
#         graph[i]=[]

#     for i in newlist:
#         for j in newlist:
#             if i !=j:
#                 list1=list(i)
#                 list2=list(j)
#                 count=0
#                 for i in range(len(i)):
#                     if list1[i] != list2[i]:
#                         count+=1
#                 # print(list1)
#                 # print(j)
#                 if count==1:
#                     print(list1)
#                     print(j)
#                     graph[i].append(j)
#     print(graph)
                    
                

    
#     answer = 0
#     return answer



from collections import defaultdict

def count_different_chars(word1, word2):
    diff_count = 0

    for i in range(len(word1)):
        if word1[i] != word2[i]:
            diff_count += 1

    return diff_count

def solution(begin, target, words):
    answer = 0

    g = defaultdict(list)

    for i in words + [begin]:
        for y in words:
            if i == y:
                continue
            if count_different_chars(i, y) == 1:
                g[i].append(y)

    def dfs(word, trace):
        if word == target:
            return len(trace)

        if word in trace:
            return 0

        results = []
        for w in g[word]:
            r = dfs(w, trace + [word])
            if r != 0:
                results.append(r)
        return min(results) if results else 0

    r = dfs(begin, [])
    return r

