# def solution(phone_book):
#     answer = True
#     #어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return
#     phone_book.sort()
#     for i in range(len(phone_book)-1)  :
#         if  phone_book[i]== phone_book[i+1][0:(len(phone_book[i]))]:
#             answer= False
#             break
#         else:
#             continue
    
#     return answer

def solution(phone_book):
    answer=''
    #문자열 기준으로 정렬 + 다음거랑 비교
    phone_book.sort()

    for i in range(len(phone_book)-1):
        length= len(phone_book[i])
        if len(phone_book[i])<=len(phone_book[i+1]):       
            if phone_book[i+1][0:length]==phone_book[i]:
                return False
    return True