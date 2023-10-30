# 1050~
# 요금표 fees=[기본시간,기본요금,단위시간,단위요금]
# 출입차기록 records=["입차시간 차번호 입출입여부","05:34 5961 IN","06:34 0000 OUT"... ]

# return = [요금1, 요금2 , ...] 주차번호가 작은 차부터 금액 정리해서 반환

#입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주
#00:00부터 23:59까지의 입/출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금을 일괄로 정산
import math
def solution(fees, records):
    [stdtime,stdfee,addtime,addfee]=fees
    #레코즈를 순회하면서 
    
    obj={}
    statusobj={}
    intervalobj={}
    def calcfee(interval):
        if interval<=stdtime:
            # print('기본가격')
            return stdfee
        else:
            times= math.ceil((interval-stdtime)/addtime)
            # print('기준시간몇번',times)
            caledfee=stdfee+(times)*addfee
            return caledfee

    
    for r in records:
        [time,carnum,status]=r.split(' ')
        if carnum not in obj or (carnum in intervalobj and statusobj[carnum]=='OUT') :   #입장시
            obj[carnum]= time
            statusobj[carnum]=status
        else:   #퇴장시
            whenin=obj[carnum]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            tmplist2=list(map(int,time.split(':')))
            outtime=tmplist2[0]*60+tmplist2[1]
            interval=outtime-intime #차가 머무른 시간
            # print(carnum,interval)
            if carnum not in intervalobj:
                intervalobj[carnum]= interval
            else:
                intervalobj[carnum]+= interval
            statusobj[carnum]=status
    # print(obj)
    

    keys= sorted(list(obj.keys()))
    # print(keys)
    answer = []
    
    for k in keys:
        if statusobj[k]=='IN': #시간이 기록되어 있다면
            whenin=obj[k]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            interval=23*60+59-intime   #23:59에 출차 가정함
            if k in intervalobj:
                intervalobj[k]+=interval
            else:intervalobj[k]=interval
        if k in intervalobj:
            answer.append(calcfee(intervalobj[k]))

        else:
            whenin=obj[k]
            tmplist=list(map(int,whenin.split(':')))
            intime=tmplist[0]*60+tmplist[1]
            interval=23*60+59-intime   #23:59에 출차 가정함
            # print('밤늦게출차가정',interval)
            answer.append(calcfee(interval))
            
            # times= math.ceil((interval-stdtime)/addtime)
            # calfee=stdfee+(times)*addfee
            # answer.append(calfee)

    
    return answer