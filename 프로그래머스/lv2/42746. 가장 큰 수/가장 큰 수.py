# def solution(numbers):
#     answer = ''
    
#     numbers.sort(reverse=True)
#     print(numbers)
#     return answer
def solution(numbers):
    # 1. 모든 수를 문자열로 변환
    numbers = list(map(str, numbers))

    # 2. 9가 90이나 9090보다 앞에 와야하기에 ->'9'*4='9999'로 만들어서 비교함 
    numbers.sort(key=lambda x: (x * 4)[:4], reverse=True)
    # 3. 정렬된 numbers를 이어붙인 뒤 반환
    answer = ''.join(numbers)

    # 0이 여러개일 경우, "000" 대신 "0"을 반환하도록 예외처리
    if answer[0] == '0':
        return '0'
    else:
        return answer
    
# def solution(numbers):
#     answer = ''
#     numbers.sort(reverse=True, key = lambda x : str(x)*3) # 사전식 정렬 
#     numbers=''.join(str(s) for s in numbers)
#     return "0" if numbers[0]=="0" else numbers