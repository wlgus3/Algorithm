def solution(sizes):
    #사이즈 길이 1~10000 /w,h 형식 1~1000
    answer = 1
    
    for i in sizes:
        i.sort( reverse=True)
    # print(sizes)
        
    sizes.sort(key=lambda x:x[0], reverse=True)
    # print(sizes)
    answer= answer* sizes[0][0]
    
    sizes.sort(key=lambda x:x[1], reverse=True)
    answer= answer* sizes[0][1]
    
    return answer