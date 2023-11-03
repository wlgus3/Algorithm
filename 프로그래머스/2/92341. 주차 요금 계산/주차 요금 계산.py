# 1050~1217  1시간 30분

# 요금표 fees=[기본시간,기본요금,단위시간,단위요금]
# 출입차기록 records=["입차시간 차번호 입출입여부","05:34 5961 IN","06:34 0000 OUT"... ]

# return = [요금1, 요금2 , ...] 주차번호가 작은 차부터 금액 정리해서 반환

#입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주
#00:00부터 23:59까지의 입/출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금을 일괄로 정산

# 복잡해보이지만 결국 구현문제 -> 하지만 세세하게 고려해야 할 조건이 매우 많아서 까다로웠다.

# 조건을 면밀하게 읽고 세부적인 내용까지 모두 기록한 후에 코드를 짰어야 했음 -> 잘못된 조건으로 짜기 시작해서 돌아가서 고치느라 시간을 많이 씀
# 나는 한 번 입차, 출차한 차는 다시 못들어온다고 생각하고 코드를 짰으나, 여러 번 왕복 가능하며 
# 나갈때마다 계산이 아닌 하루동안 이용시간을 총 시간으로 해서 기본시간과의 비교를 통해 요금을 산정한다.

import math
def solution(fees, records):
    [stdtime,stdfee,addtime,addfee]=fees
    
    obj={}  #입차시간 기록할 오브젝트
    statusobj={}    #차의 상태 인아웃 기록할 오브젝트
    intervalobj={}  #차가 얼마나 사용했는지 누적할 오브젝트 
    
    def calcfee(usetime):  #시간을 주면 요금을 리턴하는 함수 선언
        if usetime<=stdtime:    #기본사용시간 내
            return stdfee
        else:   #기본사용시간 초과
            times= math.ceil((usetime-stdtime)/addtime)
            caledfee=stdfee+(times)*addfee
            return caledfee

    for r in records:   
        [time,carnum,status]=r.split(' ')
        # !! 입장시 조건이 까다로움. 아예 obj에 없거나, 이미 아웃처리되었지만 다시 온 경우 모두를 고려해야 함)
        if carnum not in obj or (carnum in intervalobj and statusobj[carnum]=='OUT') :   
            obj[carnum]= time
            statusobj[carnum]=status
        else:   #퇴장시
            whenin=obj[carnum]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            tmplist2=list(map(int,time.split(':')))
            outtime=tmplist2[0]*60+tmplist2[1]
            interval=outtime-intime #차가 머무른 시간 ->입장, 퇴장시간을 분 단위로 계산 후 차이 계산
            if carnum not in intervalobj:   # 기록된 사용시간 없다면  =
                intervalobj[carnum]= interval
            else:                       # 이미 사용시간 기록되어있다면 + 
                intervalobj[carnum]+= interval
            statusobj[carnum]=status
    # print(obj)
    
    keys= sorted(list(obj.keys()))  #차 번호 오름차순으로 출력하기 위해 키값만 리스트로
    # print(keys)
    answer = []
    
    for k in keys:
        if statusobj[k]=='IN': #차의 상태가 'IN'이라면 입차는 했으나 아직 출차 처리가 되지않아 사용시간이 누적되지 않은 상태 -> 누적해야함
            whenin=obj[k]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            interval=23*60+59-intime   #23:59에 출차 가정했을 때 사용시간
            if k in intervalobj:    # !!! 여기서도 이미 기록된 사용시간이 있는지 여부를 판단하고 + 인지 = 인지를 분기해야한다.
                intervalobj[k]+=interval
            else:intervalobj[k]=interval
            
        if k in intervalobj:
            answer.append(calcfee(intervalobj[k]))

        else:
            whenin=obj[k]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            interval=23*60+59-intime   #23:59에 출차 가정했을 때 사용시간
            answer.append(calcfee(interval))
            
    return answer