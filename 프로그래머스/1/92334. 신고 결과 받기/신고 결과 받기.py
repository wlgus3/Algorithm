# 0558~
# id_list=[name,name2,name3...] 최대1000개 / report=['누가신고 누구를신고',''...] 최대200,000 / k=제한신고기준 최대200
# 유저별 처리결과 메일 받은 횟수를 [] 담아 리턴 -> id_list 순서대로 

# 만약 전부 같은신고자가 같은사람 신고한거면? -> 처음에 set 하고 하면 해결? 

# 신고는 한명씩 계속 신고 가능하나, 동일한유저 신고는 1회로 처리
# k이상 신고-> 정지 -> 메일 발송  / 신고내용 취합해서 한번에 정지 및 처리메일발송 ->처리메일은 신고유저 정지시 신고자에게 주는것 

def solution(id_list, report, k):
    # report 순회하면서 신고현황 obj로 만들고  {신고당한:[신고한,신고한2,..], ... }
    # obj 순회하면서  정지된 사람인지 판별하고, resultobj={신고자:메일받을수 , ... } 를 최신화해줌
    # id_list 돌면서 resultobj 수 넣어서 answer 반환
    
    setreport = set(report)
    
    reportobj={}
    for i in setreport:
        [fromwho, reported]=i.split(' ')   
        if reported in reportobj:
            reportobj[reported].append(fromwho)
        else:
            reportobj[reported]=[fromwho]
    # print(reportobj)
    
    resultobj={}    
    for key in reportobj: # key를 순회함 -> 신고당한 자들 
        length=len(reportobj[key])
        if length >= int(k):
            arr=reportobj[key]
            for who in arr:
                if who in resultobj:
                    resultobj[who]+=1
                else:resultobj[who]=1
    # print(resultobj)
    answer = []
    for id in id_list:
        if id in resultobj:
            answer.append(resultobj[id])
        else:
            answer.append(0)
        
        
    return answer