# # def solution(numbers):
# #     answer = ''
    
# #     numbers.sort(reverse=True)
# #     print(numbers)
# #     return answer
def solution(numbers):
    # 1. 모든 수를 문자열로 변환
    numbers = list(map(str, numbers))

    # 2. 9가 90이나 9090보다 앞에 와야하기에 ->'9'*4='9999'로 만들어서 비교함 
    numbers.sort(key=lambda x: (x * 4)[:4], reverse=True) 
    # 3. 정렬된 numbers를 이어붙인 뒤 반환
    answer = ''.join(numbers)

    # numbers가 [0,0,0,...]와 같을때, "000.." 대신 "0"을 반환하도록 예외처리
    if answer[0] == '0':
        return '0'
    else:
        return answer
    
# # def solution(numbers):
# #     answer = ''
# #     numbers.sort(reverse=True, key = lambda x : str(x)*3) # 사전식 정렬 
# #     numbers=''.join(str(s) for s in numbers)
# #     return "0" if numbers[0]=="0" else numbers





# 못풀었음
# from collections import deque
# def solution(numbers):
#     answer=''
#     tmp=list(map(str,numbers))
#     print (tmp)
#     tmp.sort(reverse=True)
#     print (tmp)
#     # tmp=deque(tmp)
#     # print(tmp)
#     while tmp:
#         #    맨 앞글자가 같은것끼리 비교하는데 길이 1이면 무조건 놓고 
#         maxnum=tmp[0][0]
#         samefirststring=[]
#         for i in tmp:
#             if i[0]==maxnum:
#                 samefirststring.append(tmp.pop())
#             else: break
#             samefirststring.sort()
#             while samefirststring[0]==maxnum:
#                 answer+=samefirststring
#             samefirststring.sort(reverse=True):

                        
                
#     return answer

