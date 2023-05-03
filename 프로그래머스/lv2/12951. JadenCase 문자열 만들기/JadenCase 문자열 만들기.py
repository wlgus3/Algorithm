def solution(s):
    answer = ''
    jaden = list(s.lower())
    for i in range(len(jaden)):
        if jaden[i].isdigit():
            answer += jaden[i]
        elif jaden[i] == ' ':
            answer += jaden[i]

        elif jaden[i].isalpha():
            if len(jaden[0:i]) == 0:
                answer += jaden[i].upper()
            elif jaden[i-1] == ' ':
                answer += jaden[i].upper()
            else:
                answer += jaden[i]
    print(answer)
    return answer