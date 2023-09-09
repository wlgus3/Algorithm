# def solution(progresses, speeds):
#     #각 배포마다 몇개의 기능이 배포?
#     #개수는 100개 이하 , 배포는 하루한번 하루끝에 배포함
#     answer = []
#     # print( list(filter(lambda item: item<90 ,progresses)) )
#     while progresses !=[] :# 모든 과정 공정률이 100이상일때까지 반복
#         # 매일 각 인덱스에 맞는 숫자 더하기
#         for j in range (len(progresses)):
#             progresses[j]= progresses[j]+speeds[j]
#     # 매일 맨 앞부터 퍼센트 확인 및 개수 세서 answer에 넣어주고,100넘는건 빼기?
#         if progresses[0]>=100:
#             count=0
#             for i in progresses:            
#                 if i >=100:
#                     count+=1
#                     # progresses.remove(i)
#                     # speeds.pop(0)
#                 else:
#                     break
#             if count>0:answer.append(count)
#             progresses=progresses[count:]
#             speeds=speeds[count:]
#         # progresses.pop(0)
#         print(progresses,speeds)
                    
#     return answer
def solution(progresses, speeds):
    answer=[]
    newProgresses=[]
    for i in range(len(progresses)):
        newProgresses.append([progresses[i],speeds[i]])
    print(newProgresses)
    while newProgresses:
        for i in range(len(newProgresses)):
            newProgresses[i][0]+=newProgresses[i][1]
        count=0
        index=0
        for j in range(len(newProgresses)):
            if newProgresses[j][0]<100:
                break
            else:
                index=j
                count+=1
        if count!=0:
            newProgresses=newProgresses[index+1:]
            answer.append(count)
    return answer
