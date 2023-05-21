def solution(n, left, right):
    answer = []
    for p in range(left, right+1):
        temp = []
        temp.append(p//n)
        temp.append(p%n)
        answer.append(max(temp) + 1)
    return answer
