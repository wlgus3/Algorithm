def solution(n):
    answer = 0

    arr=list(str(n))
    # print(arr)
    for i in arr:
        answer+= int(i)

    return answer