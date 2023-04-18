def solution(genres, plays):
    #장르별 베스트 2개씩모아 앨범으로 , 장르조회수->노래재생수->재생수 같으면 고유번호 낮은 노래 먼저 
    answer = []
    dict={}
    for i in range(len(genres)): #딕셔너리에 장르별로 모으고, 총 재생수도 +
        if genres[i] not in dict :
            dict[genres[i]]=[]
            dict[genres[i]].append([plays[i]])
            dict[genres[i]].append([plays[i],i])
        else:
            dict[genres[i]][0][0]+=plays[i]
            dict[genres[i]].append([plays[i],i])

    dict2=sorted(dict.items(),reverse=True,key=lambda x:x[1])   #총 재생수 기준으로 정렬
    #print(dict2)
    for i in dict2 :
        i[1].sort(key=lambda x:x[0], reverse=True)
        if len(i[1])>=3:
            answer.append(i[1][1][1])
            answer.append(i[1][2][1])  
        else:
            answer.append(i[1][1][1])
        
    print(dict2)
    
    return answer # 50%정도가 런타임에러 
