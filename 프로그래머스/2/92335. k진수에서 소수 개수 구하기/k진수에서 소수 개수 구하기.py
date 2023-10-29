# 1000~
import math
def solution(n, k):
    # 정수 n을 k진법으로 만들고 그 안에 조건에 맞는 소수가 몇개인지 반환
    # k진법으로 만든 이후에 0으로 split하고 소수 판별하기
    
    def isPrime(n):
        print(n)
        if n==1:
            return False
        for z in range(2,int(math.sqrt(n))+1): #2~제곱근까지만 순회 -> !!!주의 int(math.sqrt(n))+1 형태로 최종형태가 int가 되도록 해야함
            if n%z==0: #나누어 떨어지면
                return False
        return True
    
    pointer=1
    klist=[] #k의 배수모음 리스트
    while pointer <=n:
        klist.append(pointer)
        pointer*=k
    
    knumber=''  #k진수 담을 변수
    tmpn=n  #임시n
    for i in range(len(klist)): #k진수 구하기
        if klist[-(i+1)]<=tmpn:
            tmp=math.floor(tmpn/klist[-(i+1)])
            knumber+=str( tmp)
            tmpn=tmpn%klist[-(i+1)]
        else:
            knumber+='0'
    

    arr= knumber.split('0')

    
    answer = 0
    for j in arr:
        if j!='':
            if isPrime(int(j))==True:
                answer+=1
        # if j!='':
        #     if isPrime(int(j)):
        #         answer+=1
    
    return answer