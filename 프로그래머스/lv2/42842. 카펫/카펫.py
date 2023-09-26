def solution(brown, yellow):
    answer = []
    div=[]
    for i in range( 1, int(yellow**(1/2))+1):
        if yellow%i==0:
            if i**2==yellow:
                div.append([i, i])
            else:
                div.append([int(yellow/i), i])
    print(div)
    for j in div:
        if(j[0]+2)*2+(j[1]+2)*2-4==brown:
            answer.append(j[0]+2)
            answer.append(j[1]+2)
            break
        else:continue
    return answer