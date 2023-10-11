def solution(s):
    answer = 0
    #반복할 수 있는 s 길이 경우의 수까지 반복하고
    
    return answer



def solution(s):
    answer = len(s)
    for i in range(1, len(s)//2 + 1):
        tmp, idx = "", 0
        while idx < len(s):
            c, n = s[idx:idx+i], 1
            while c == s[idx+i: idx+i+i]:
                idx, n = idx + i, n + 1
            tmp, idx = tmp + ((str(n) + c) if n != 1 else c), idx + i
        answer = len(tmp) if len(tmp) < answer else answer
    return answer