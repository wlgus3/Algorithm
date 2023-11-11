# def solution(array, commands):
#     #0934-0943
    
#     answer = []
#     for j in commands:
#         splitArr=array[j[0]-1:j[1]]
#         splitArr.sort()
#         answer.append(splitArr[j[2]-1])
#     return answer

def solution(array, commands):
    answer=[]
    for i in commands:
        tmp= array[i[0]-1:i[1]].copy()
        tmp.sort()
        answer.append(tmp[i[2]-1])
    return answer
