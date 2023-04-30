def solution(want, number, discount):
    answer = 0
    wantLength=len(want)
    # for i in range
    for i in range(0,len(discount)-9):
        arr=discount[i:i+10]
        check=[]
        for i in range(0,wantLength):
            check.append(0)
        for j in arr:
            for z in range(0,wantLength):
                if j==want[z] : check[z]+=1
        # print(check)
        if check== number:
            answer+=1
    return answer