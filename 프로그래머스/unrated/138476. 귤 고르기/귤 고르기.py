# def solution(k, tangerine):
#     answer = k
#     tangerine.sort()
#     # print(tangerine)
#     for i in range(0,len(tangerine)-k+1):
#         box=set(tangerine[i:i+k])
#         # print(tangerine[i:i+k])
#         if answer > len(box):
#             answer=len(box)
            
#     return answer

def solution(k, tangerine):
    answer = 0
    check = 0
    tangerine.sort()
    dup = {}
    for i in tangerine:
        if i in dup:
            dup[i] += 1
        else:
            dup[i] = 1

    arr = sorted(dup.items(), key=lambda x: x[1], reverse=True)
    if arr[0][1] >= k:
        return 1
    else:
        for i in arr:
            if check < k:
                check += i[1]
                answer += 1
            else:
                break
    return answer



