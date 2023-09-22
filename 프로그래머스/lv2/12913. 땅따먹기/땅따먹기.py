# def solution(land):
#     answer = 0
#     idx=None
#     for i in land:
#         if idx:
#             del i[idx]
#         print(i)
#         temptmax= max(i)
#         answer += temptmax
#         idx= i.index(temptmax)

#     return answer

def solution(land):
    for j in range(1, len(land)):
        land[j][0] += max(land[j-1][1], land[j-1][2], land[j-1][3])
        land[j][1] += max(land[j-1][2], land[j-1][3], land[j-1][0])
        land[j][2] += max(land[j-1][3], land[j-1][0], land[j-1][1])
        land[j][3] += max(land[j-1][0], land[j-1][1], land[j-1][2])

    return max(land[-1])