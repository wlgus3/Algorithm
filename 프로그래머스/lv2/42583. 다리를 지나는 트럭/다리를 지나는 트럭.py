# def solution(bridge_length, weight, truck_weights):
    
#     #5:42
#     # ontheBridge=[]
#     # for i in range(bridge_length):
#     #     ontheBridge.append(0) # 다리위 트럭 대기열
#     ontheBridge=[0 for i in range(bridge_length)]
    
#     trucksNum= len(truck_weights) #트럭 수
#     count =0 #지나간 트럭 수
#     answer = 0 #경과시간 
#     print(ontheBridge,trucksNum)
    
#     while count !=trucksNum:
#         answer+=1
#         if ontheBridge[0]!=0: count+=1
#         ontheBridge.pop(0) #맨앞에있는 트럭 먼저 빼주고 조건 봐야함 
#         if len(truck_weights)==0: # 남은 대기 트럭이 없을때 
#             ontheBridge.append(0)
#         elif sum(ontheBridge) + truck_weights[0] <= weight:# 무게제한때문에 대기트럭 올릴 수 있다면
#             ontheBridge.append(truck_weights[0])
#             truck_weights.pop(0)
#         else: #대기트럭 있는데 무게제한때문에 못올리면
#             ontheBridge.append(0)
#     return answer






# def solution(bridge_length, weight, truck_weights):
#     bridge=[]
#     for i in range(bridge_length):
#         bridge.append(0)
#     # bridge=[0 for i in range(bridge_length)]
#     count=0
#     sumWeight=0
#     while truck_weights!=[]:
#         count+=1
#         sumWeight-=bridge[-1]
#         del bridge[-1]
        
#         bridge.insert(0,0)
#         if sumWeight+truck_weights[0]<=weight:
#             bridge[0]=truck_weights[0]
#             sumWeight+=truck_weights[0]
#             del truck_weights[0]

#     return count+bridge_length



def solution(bridge_length, weight, truck_weights):
    bridge=[]
    for i in range(bridge_length):
        bridge.append(0)
    # bridge=[0 for i in range(bridge_length)] #또다른 방법
    count=0
    sumWeight=0
    while truck_weights!=[]:
        count+=1
        sumWeight-=bridge[-1]
        del bridge[-1]
        
        bridge.insert(0,0)
        #원래는 sum(bridge)로 다리위 무게총합을 구했는데 그렇게하니 시간초과 발생함 
        if sumWeight+truck_weights[0]<=weight:
            bridge[0]=truck_weights[0]
            sumWeight+=truck_weights[0]
            del truck_weights[0]

    return count+bridge_length