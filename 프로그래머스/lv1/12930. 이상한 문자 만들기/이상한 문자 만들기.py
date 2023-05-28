def solution(s):
    answer = ''
    capital = list(s)

    index = 0
    for c in range(len(capital)):
        if capital[c] == ' ':
            answer += capital[c]
            index = 0
        elif index % 2 == 0:
            capital[c] = capital[c].upper()
            answer += capital[c]
            index += 1
        elif index % 2 == 1:
            capital[c] = capital[c].lower()
            answer += capital[c]
            index += 1
    return answer