from itertools import permutations

def solution(numbers):
    answer=0
    # arr=numbers.split()
    numbersList=list(numbers)
    permutationList=[] 
    for i in range(1,len(numbersList)+1): #문자 길이 다양함
        for j in permutations(numbersList,i):
            permutationList.append(j)

    # print(numbersList)
    # print(permutationList)
    answerlist=[]
    for i in permutationList:
        number=int(''.join(i))  #List 형태를 콤마 빼고 str 형태로 바꾼 후 int변환
        print(number)
        result=0
        if number==1 or number==0:
            continue
        else:
            for j in range(2,int(number**(1/2)+1)):
                if number%j == 0:
                    result= -1
                    break
            if result==0:
                if number in answerlist:
                    continue
                else:
                    answerlist.append(number)
    
    print(answerlist)
    return len(answerlist)