# def solution(priorities, location):
#     answer = 0
#     count=0
#     arr=[]
#     for i in range(len(priorities)): #로케이션 표시한 리스트 제작
#         if i == location:
#             arr.append(1)
#         else: arr.append(0)
        
#     print(arr)
    
#     while priorities != []:
#     # for i in priorities:
#         if priorities[0] == max(priorities):#인쇄한다면
#             count=count+1
#             if arr[0]==1: 
#                 answer =count
#                 break
#             priorities.pop(0)
#             arr.pop(0)
#         else: #인쇄 못함 맨 뒤로 
#             priorities.append(priorities[0])
#             priorities.pop(0)
#             arr.append(arr[0])
#             arr.pop(0)
#         print(priorities)
#     return answer




def solution(priorities, location):
    sequence=[]
    while sum(priorities)!=0:
        for index, priority in enumerate(priorities):
            if priority==0:
                continue
            elif max(priorities)<=priority:
                sequence.append(index)
                priorities[index]=(0)
    # print(sequence)
    return sequence.index(location)+1