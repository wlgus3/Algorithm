import math
def solution(n):
    value = str(math.sqrt(n))
    check = len(value[value.find(".")+1:])
    if(check == 1):
        return pow(int(math.sqrt(n))+1,2)
    else:
        return -1