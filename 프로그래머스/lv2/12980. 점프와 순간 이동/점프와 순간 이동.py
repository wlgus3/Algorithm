def solution(n):
    ans = 0
    
    # 앞으로 한 칸 움직이면 배터리 -1, 
    # 지금까지 온 거 *2의 위치로 순간이동하면 배터리 안닳음

    while n>0:
        if n%2!=0:
            ans+=1
            n-=1
        n=n//2
    return ans