import math
t= int(input())
for i in range(t):
    x1,y1,r1,x2,y2,r2=map(int,input().split())
    #점1 에서 r1반지름 원을 그리고 점2에서 r2 반지름 원을 그리고 만나는 점의 개수 반환 완전히 일치한다면 -1
    longr=max(r1,r2)
    shortr=min(r1,r2)
    distance=math.sqrt((x1-x2)**2+(y1-y2)**2)

    #두 점이 일치
    if x1==x2 and y1==y2:
        if r1==r2:
            print(-1)
        elif r1!= r2:
            print(0)
    #두 점이 일치 x
    else:
        if distance>r1+r2:   #점 사이의 거리> 반지름 두개 합 ->0 아예 떨어져있음 
            print(0)
        elif longr-shortr<distance and distance<r1+r2:    #점 사이의 거리< 반지름 두개 합 ->2 일반적 2개 접
            print(2)
        elif distance==(r1+r2):    #점 사이의 거리== 반지름 두개 합 ->1  외접
            print(1)
        elif longr== distance+shortr:    #긴 r 거리 == 두 점 사이의 거리+작은 r ->1 내접
            print(1)
        elif longr >distance+shortr:    #긴 r 거리 > 두 점 사이의 거리 + 작은 r -> 0 큰원 내부에 작은원  
            print(0)