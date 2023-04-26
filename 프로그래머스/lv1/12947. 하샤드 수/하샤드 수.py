def solution(x):
    answer = True
    xarr=[]
    for i in str(x):
        xarr.append(i)
    print (xarr)
    sum=0
    for i in xarr:
        sum+= int(i)
    if x% sum!=0: answer=False 
    return answer