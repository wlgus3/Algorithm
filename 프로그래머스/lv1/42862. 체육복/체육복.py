# def solution(n, lost, reserve):
#     answer = 0 
#     cant=0
#     for i in lost:
#         for j in reserve:
#             if i==j:
#                 reserve.remove(i)
#                 lost.remove(i)
#     for i in lost:
#         if i-1 in reserve:
#             reserve.remove(i-1)
#         elif i+1 in reserve:
#             reserve.remove(i+1)            
#         else:
#             cant+=1
#     return n-cant

def solution(n, lost, reserve):
    lost_set = set(lost)
    reserve_set = set(reserve)
    reserve_and_lost = lost_set & reserve_set

    lost_set -= reserve_and_lost
    reserve_set -= reserve_and_lost

    for i in reserve_set:
        if i - 1 in lost_set:
            lost_set -= {i - 1, }
        elif i + 1 in lost_set:
            lost_set -= {i + 1, }

    return n - len(lost_set)    