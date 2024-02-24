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
            break   # 이 상황에서 break 없으면 아래에서 pop이 불가하기에 런타임에러 발생함
        new=heapq.heappop(scoville)+heapq.heappop(scoville)*2
        heapq.heappush(scoville,new) 
        answer+=1
        
    
    return answer

