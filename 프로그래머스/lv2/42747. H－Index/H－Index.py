def solution(citations):
    answer = 0
    #h번 이상 인용된 논문이 h개 이상 있는가? h의 최대값  1~1000편 인용 0~10000
    citations.sort(reverse=True)
    # print(citations)
    for i in range(len(citations)):
        #큰수->낮은수 가면서 i보다 큰지 계속 확인
        if citations[0]==0:
            break
        elif citations[i]>=i+1:
                answer=i+1
        else:break
            
                  
    return answer