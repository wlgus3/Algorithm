
def solution(number, limit, power):
    answer = 0
    arr=[]
    for i in range(1,number+1):
        divisor=[]
        for j in range(1,int(i**(1/2))+1):
            if i%j==0:
                divisor.append(j)
                if j**2!= i:
                    divisor.append(i//j)
        # print(divisor)
        arr.append(len(divisor))

    # print(arr)
    for el in arr:
        if el<=limit:
            answer+= el
        else:
            answer+= power
            
    return answer