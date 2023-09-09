# def solution(clothes):
#     answer = 1
#     #서로다른 옷의 조합 수 리턴, [의상이름,의상종류] 같은이름존재x 길이 20이하 알파벳소문자 혹은_로만 이루어짐 의상수는 1~30, 하루 최소 한 개의상입음 
#     dict={}
#     for i in clothes:
#         #if !dict[i[1]] :
#         if i[1] not in dict.keys() :
            
#             dict[i[1]]=[]
#             dict[i[1]].append(i[0])

#             continue
#         else :
#             dict[i[1]].append(i[0])
#             continue
    
#     print (dict)
#     keys=dict.keys()
#     for i in keys:
#         answer=answer*(len(dict[i])+1)
        
    
#     return answer-1

def solution(clothes):
    dict={}
    for i in clothes:
        if i[1] not in dict.keys():
            dict[i[1]]=[i[0]]
        else :
            dict[i[1]].append(i[0])
    answer=1
    print(dict)
    for j in dict.values():
        answer*= len(j)+1
    return answer-1 #아예 안입는건 안됨 
        