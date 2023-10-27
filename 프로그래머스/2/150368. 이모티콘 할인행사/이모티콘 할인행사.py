# 1044~
from itertools import product
def solution(users, emoticons):
    # 가입자 최대 늘리기 - 판매액 최대로 늘리기 
    # 개인 기준할인율 이상 할인 모두구매, 총액기준 넘으면 플러스서비스 구매
    #이모티콘마다 할인율 다를수있꼬 10 20 30 40중 하나로 설정
    #   1<= users <=100 , [[할인율, 가격],[] ...] 형태 
    #   1<=emoticons<=7 , [가격, 가격2, 가격3] 형태 

    #중복순열으로 할인율4가지 * emoticons종류 를 구한다. ->할인율 경우의 수 list
    discount=list(product([0.1,0.2,0.3,0.4], repeat=len(emoticons)))
    
    maxpluscount=0
    maxperchase=0
    for case in discount:# 할인 경우의 수 7C4*4! ??
        pluscount=0
        perchase=0
        tmpperchase=0
        for u in users:#각 고객 순회    100
            for i,d in enumerate(case):  #각 이모티콘 할인율     7
                if d*100>=u[0]:
                    tmpperchase+= emoticons[i]*(1-d)
                # print(tmpperchase,i,d)
            if tmpperchase >= u[1]: #금액기준넘으면 이모티콘 환불후 플러스서비스 구매
                pluscount+=1
                tmpperchase=0
            perchase+=tmpperchase
            tmpperchase=0
        if pluscount>maxpluscount:
            maxpluscount=max(maxpluscount,pluscount)
            maxperchase=perchase
        elif pluscount==maxpluscount:
            maxperchase=max(maxperchase,perchase)

    #할인율 경우의 수 list를 순회하면서 가입자수, 총액 확인하면서 맥스값 최신화 
    answer = [maxpluscount,maxperchase]
    return answer