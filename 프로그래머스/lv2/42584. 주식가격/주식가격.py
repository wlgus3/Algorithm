def solution(prices):
    #0650
    #prices 돌면서, 과거가격과 지금가격 비교해서 얼마나 
    answer = []
    priceLength=len(prices)
    for i in range (priceLength):
        count=0
        if i== priceLength-1: #마지막이면
            answer.append(count) 
            break
        for j in range (i+1, priceLength):
            count+=1
            if prices[i] >prices[j] or j== priceLength-1: #상승중단
                answer.append(count)
                # print(i,j)
                break
            # if i== priceLength-1:break
            # if j== priceLength-1:
            #     answer.append(count)
    return answer

# def solution(prices):
#     answer = []
#     for i in range(len(prices) - 1):
#         sec = 0
#         for j in range(i, len(prices) - 1):
#             if(prices[i] <= prices[j]):
#                 sec += 1
#             else:
#                 break
#         answer.append(sec);
#     answer.append(0);
#     return answer