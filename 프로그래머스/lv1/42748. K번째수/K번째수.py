def solution(array, commands):
    #0934-
    
    answer = []
    for j in commands:
        splitArr=array[j[0]-1:j[1]]
        splitArr.sort()
        answer.append(splitArr[j[2]-1])
    return answer