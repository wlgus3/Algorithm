# def solution(n):
#     answer = ''
#     upper=1
#     upper3=[1]
#     while not 3**(upper)>=n: #n보다 작은 3의 제곱수들 list에 모으기
#         upper3.append(3**upper)
#         upper+=1
#     upper3.sort(reverse=True)
#     print(upper3)
    
#     for i in upper3:
#         if i==1: 
#             if n//i==3:
#                 answer=answer+'4'
#             elif n//i==2:
#                 answer=answer+'2'
#             elif n//i==1:
#                 answer=answer+'1'
#             else:
#                 continue
#         else:
#             if n//i==3 and n%i==0:
#                 answer=answer+'2'
#                 n=n-2*i
#                 continue
#             elif n//i==3:
#                 answer=answer+'4'
#             elif n//i==2:
#                 answer=answer+'1'
#             elif n//i==1:
#                 answer=answer+'1'
#             else:
#                 continue
#         n=n%i

#     return answer

def solution(n):
    result = []
    while n:
        t = n % 3
        if not t:
            t = 3
            n -= 1
        result.append(str(t))
        n //= 3
    print(result[::-1])
    for i in range(len(result)):
        if result[i] == '3':
            result[i] = '4'
    return ''.join(result[::-1])

print(solution(20))