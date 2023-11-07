# 1027~
# 같은 점수 여러번 맞춰도 점수*1 가져감, 두선수중 더 많이 맞춘선수가 해당 점수 가져감 동점이면 어피치가 가져감
# 최종점수 높은사람이 승자 , 동점이면 어피치 승
# 현상황 =어피치 n번 다 쐈고 라이언이 쏠 차례 
# 가장 큰 점수차로 어피치 이기기 위한 방법 구하기
# n= 화살 개수 , 어피치가 맞춘 과녁기록 10점,9점,...0점 순서대로 info=[...] 길이 11
# 라이언 어떤점수 맞출지 10부터 0까지 순서대로 [] 담아 return 
# 우승 할 수 없는 경우는 [-1] return ,방법이 여러가지면 가장 낮은 점수 많이 맞춘경우를 return 
from collections import defaultdict
def solution(n, info):
    answer = [0]*11
    choice=defaultdict(list)
    for i,count in enumerate(info):
        print(i,count)
        point=10-i
        perpoint=(10-i)/(count+1)
        choice[perpoint].append([point,count+1])    #점수,선택
    # print(choice)
    # arr=sorted(choice.keys(),reverse=True)
    # print( arr)
    sorted_choice=sorted(choice.items(),reverse=True)
    print(sorted_choice)
    chance=n
    for c in sorted_choice:
        for j in c[1]:
            if j[1]<=chance:
                point=j[0]
                answer[10-point]=j[1]
                chance-=j[1]
    # for k in arr:
    #     choice[k].sort(key=lambda x :x[0])
    #     for c in choice[k]:
    #         if c[1]<=chance:
    #             point=c[0]
    #             answer[10-point]=c[1]
    #             chance-=c[1]
    if chance!=0:
        answer[-1]=chance
    return answer