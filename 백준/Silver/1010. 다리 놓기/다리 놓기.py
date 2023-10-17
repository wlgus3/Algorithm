from itertools import combinations
n= int(input())
def pactorial(n):
    re=1
    for i in range(n):
        re*=n-i
    return re

for i in range( n ):
    n,m=map(int,input().split()) # n,m 최대 30
    # 순서대로 선택하는데 경우의 수가 점점 줄어든다.
    # arr=[]
    # for j in range(m):
    #     arr.append(j)
    # result=0
    # for z in combinations(arr,n):
    #     result+=1

    result=1
    result=int(pactorial(m)/( pactorial(n)*pactorial(m-n) ))
    print(result)
    