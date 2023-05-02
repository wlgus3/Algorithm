def solution(arr):
    answer = 0
    maxnum= max(arr)
    check=False
    while check==False:
        count=0
        for i in arr:
            if maxnum%i==0 : 
                count+=1
        if count==len(arr): 
            # print(maxnum)
            answer=maxnum
            check=True
        maxnum+=1
    return answer