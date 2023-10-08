import heapq 
def solution(scoville, K):
    answer = 0
    judge=False
    heapq.heapify(scoville)
    
    while judge!=True:
        if scoville[0]>=K:
            judge= True
            break
        if len(scoville)<2:
            answer=-1
            break
        new=heapq.heappop(scoville)+heapq.heappop(scoville)*2
        heapq.heappush(scoville,new)
        answer+=1
        
    
    return answer

