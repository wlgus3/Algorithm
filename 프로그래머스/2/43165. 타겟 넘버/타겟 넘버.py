# def solution(numbers, target):
#     answer = 0
#     result=[]
#     for i in numbers:
#         if result==[]:
#                 result.append(+i)
#                 result.append(-i)
#         else:
#             for r in range(len(result)): 
#                 result.append(result[r]+i)
#                 result.append(result[r]-i)
#     print(result)
#     print(len(result))
#     sum=2
#     for j in range(1,len(numbers)-1):
#         sum= sum+ 2*sum
#     print(sum)
#     for i in range(sum,len(result)):
#         if result[i]==target:
#             answer+=1
#     return answer

# def solution(numbers, target):
#     answer = 0
#     # 더하거나 뺀다 = 2가지 가짓수 = 2**n 가짓수 나옴 
#     t={0:0} #트리
#     nodeidx=0
#     for i in numbers:
#         print(i)
#         t[nodeidx*2+1]= t[nodeidx]+i
#         t[nodeidx*2+2]= t[nodeidx]-i
#         nodeidx+=1
#         t[nodeidx*2+1]= t[nodeidx]+i
#         t[nodeidx*2+2]= t[nodeidx]-i
#         nodeidx+=1
        
#     print(t)
#     return answer    


#     # 타깃넘버 만드는 방법의 가짓수를 반환 



# #재귀 ,dfs로 품 
# def solution(numbers, target):

#     def calc(idx, sum): 
#         nonlocal answer

#         if idx == len(numbers): #트리 레벨이 numbers 리스트 길이만큼 커졌을 때 중단.
#             if sum == target:
#                 answer += 1
#             return

#         calc(idx+1, sum + numbers[idx])
#         calc(idx+1, sum - numbers[idx]) # 재귀로 끝까지 확인하도록 보냄
#         #재귀 함수 내 별도로 sum + - 하는 코드 없이 재귀 소환시 + - 를 해서 전달함.

#     answer = 0
#     calc(0, 0)

#     return answer

def solution(numbers, target):
    #이진트리 ? -> 더하거나/ 빼거나 라는 두 가지로 계속 늘어나니까
    count=0
    def recursion(idx, sum):
        nonlocal count

        if idx== len(numbers):
            if sum== target:
                count+=1
                print(sum)
        else: 
            recursion(idx+1, sum+numbers[idx])
            recursion(idx+1, sum-numbers[idx])
    recursion(0,0)
    return count
    
    
    
    
    
    
    
    