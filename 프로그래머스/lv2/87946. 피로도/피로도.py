from itertools import permutations


def solution(k, dungeons):
    answer = -1

    dungeons_permutaion = []
    for i in permutations(dungeons,len(dungeons)):
        dungeons_permutaion.append(list(i))
    # print(dungeons_permutaion)
    results=[]
    for case in dungeons_permutaion:
        count=0
        stamina=k
        for j in case:
            if stamina>=j[0] and stamina-j[1]>=0:
                stamina-= j[1]
                count+=1
            else: break
        results.append(count)
    # print(results)
    answer= max(results)

    return answer