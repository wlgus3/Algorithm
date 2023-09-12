# def solution(sizes):
#     #사이즈 길이 1~10000 /w,h 형식 1~1000
#     answer = 1
    
#     for i in sizes:
#         i.sort( reverse=True)
#     # print(sizes)
        
#     sizes.sort(key=lambda x:x[0], reverse=True)
#     # print(sizes)
#     answer= answer* sizes[0][0]
    
#     sizes.sort(key=lambda x:x[1], reverse=True)
#     answer= answer* sizes[0][1]
    
#     return answer

def solution(sizes):
    
    answer=0
    for i in sizes:
        i.sort()
    print(sizes)
    short=0
    long=0
    for j in sizes:
        if j[0]>=short:
            short=j[0]
        if j[1]>=long:
            long=j[1]
    answer=short*long
    return answer