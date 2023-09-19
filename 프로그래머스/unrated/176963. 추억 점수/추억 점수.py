def solution(name, yearning, photo):
    # answer = []
    answer=0
    dict = {name[i]: yearning[i] for i in range(len(name))}
    sums = [0 for i in range(len(photo))]

    for i in range(len(photo)):
        for j in range(len(photo[i])):
            if photo[i][j] in dict.keys():
                # answer.append(dict[photo[i][j]])
                answer+=int(dict[photo[i][j]])
                sums[i] += answer
            # answer.clear()
            answer=0

    answer = sums

    return answer
