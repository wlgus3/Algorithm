def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    for i in range(len(participant)):
        if i> len(completion)-1:
            answer=participant[i]
        elif participant[i] !=completion[i]:
            answer=participant[i]
            break

    return answer