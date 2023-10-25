
from itertools import product
#product는 데카르트의 수를 구현한 메서드
#product라는 python 메서드를 이용해서 중복순열 구현
def solution(word):
    permutation=[]
    for j in range(1,6): #j는 몇 개의 글자를 뽑을것인가? -> 길이1~길이5인 단어들을 뽑을 것이기에 (1,6)반복 
        for i in product(['A', 'E', 'I', 'O', 'U'], repeat=j):#길이1 중복순열, 길이2 중복순열 ... 
            permutation.append(''.join(i))
    # print(permutation)
    answer=0
    permutation.sort()
    answer=permutation.index(word)+1
    return answer