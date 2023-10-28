# 1106
# cap은 최대적재수량 n개의 집에 배달 트럭하나로 모든배달과 수거 마치고 물류창고 돌아오는 최소이동거리
# 1<=n배달집수<=100000 1<=cap적재용량<=50
# 한 집 최대 배송,수거개수 50개 박스

# 이동할때 최대한 물건 갖다주고 최대한 수거해온다.
# 먼곳부터 처리한다.

# 배달 갈 거리 length를 놓고 
def solution(cap, n, deliveries, pickups):
    answer = 0
    while deliveries!=[] and deliveries[-1]==0:
            deliveries.pop()
    while pickups!=[] and pickups[-1]==0:
            pickups.pop()
    length=max(len(deliveries),len(pickups))
    # length = n  #가장먼곳까지 거리
    putidx=n-1
    pickidx=n-1
    
    while length!=0:    #거리를 점점 줄여서 0이되면 그만
        put=cap
        pick=cap
        # print(length)
        while put!=0 and deliveries!=[]:   #배달용량 다 쓰거나 , 배달목록 전부 완료되기 전까지 
            if deliveries[-1]==0:
                deliveries.pop()
            elif put>=deliveries[-1]: #최대 배달용량이 더 크면,  deliveries[-1]=0인것 포함
                put-=deliveries[-1]
                deliveries.pop()
            elif put<deliveries[-1]:   #배달할 양이 더 크면
                deliveries[-1]-=put
                put=0
                
            # print(put)
        while deliveries!=[] and deliveries[-1]==0:
            deliveries.pop()
        # print(deliveries)
        while pick!=0 and pickups !=[]:# 수거용량 다쓰거나 , 수거목록 전부 완료되기전까지
            if pickups[-1]==0:
                pickups.pop()
            elif pick>=pickups[-1]: #최대 배달용량이 더 크면 
                pick-=pickups[-1]
                pickups.pop()
            elif pick<pickups[-1]:   #배달할 양이 더 크면
                pickups[-1]-=pick
                pick=0
                
        while pickups!=[] and pickups[-1]==0:
            pickups.pop()
        # print(pickups)
        
        
        answer+= (length)*2
        putidx=len(deliveries)
        pickidx=len(pickups)
        if (putidx==0 and pickidx==0):
            break
        length = max(putidx,pickidx)
        
    
    return answer