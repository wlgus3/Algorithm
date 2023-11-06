
# from itertools import permutations

# def solution(numbers):
#     answer=0
#     # arr=numbers.split()
#     numbersList=list(numbers)#numbers라는 문자열을 list 형태로
#     permutationList=[] #순열 만들거임
#     for i in range(1,len(numbersList)+1): #문자 길이 다양한 것 고려한 for
#         for j in permutations(numbersList,i): #permutation반복해서 각각 append
#             permutationList.append(j)

#     # print(numbersList)
#     # print(permutationList)
#     answerlist=[]
#     for i in permutationList:
#         number=int(''.join(i))  #tuple 형태를 콤마 빼고 str 형태로 바꾼 후 int변환
#         print(number)
#         result=0
#         if number==1 or number==0: #0,1 소수 아니기에 예외처리
#             continue
#         else:
#             for j in range(2,int(number**(1/2)+1)):
#                 if number%j == 0:
#                     result= -1
#                     break
#             if result==0:
#                 if number in answerlist:
#                     continue
#                 else:
#                     answerlist.append(number)
    
#     print(answerlist)
#     return len(answerlist)




# DFS로 풀어보기 
import math

def isPrime(num):
    if num==1 or num==0:
        return False
    for i in range( 2,int(math.sqrt(num))+1 ):
        if num%i==0:   #나누어떨어지면
            return False
    return True
        
        
def solution(numbers):
    answer=0
    #소수 판별 func
    arr= list(numbers)
    maxlen=len(arr)
    # print(arr,maxlen)
    answerlist=[]
    #dfs(value,newarr): 해서 돌리고 value에 하나씩붙이면서 경우의수 만들어봄 
    
    def dfs(value,array):
        numbervalue=int(value)
        if numbervalue not in answerlist:
            if isPrime(numbervalue):
                answerlist.append(numbervalue)
        if len(value)==maxlen:
            return 
        for j in array:
            tmparr=array.copy()
            index =tmparr.index(j)
            tmparr.pop(index)
            dfs(value+j, tmparr)
    
    for i in arr:
        tmparr=arr.copy()
        index =tmparr.index(i)
        tmparr.pop(index)
        dfs(i, tmparr)
    
    answer=len(answerlist)
    return answer


