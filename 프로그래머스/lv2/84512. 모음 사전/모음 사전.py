# from itertools import permutations


# def solution(word):
#     alpha= ['A', 'E', 'I', 'O', 'U','AA', 'EE', 'II', 'OO', 'UU','AAA', 'EEE', 'III', 'OOO', 'UUU','AAAA', 'EEEE', 'IIII', 'OOOO', 'UUUU','AAAAA', 'EEEEE', 'IIIII', 'OOOOO', 'UUUUU']

#     permutation=[]
#     for i in permutations(alpha,5):
#         if len(''.join(i))<=5:
#             permutation.append(''.join(i))
#     # print (permutation)

#     answer = 0
#     permutation.sort()
#     permutation.index(word)
#     return answer

from itertools import product
def solution(word):
    permutation=[]
    for j in range(1,6):
        for i in product(['A', 'E', 'I', 'O', 'U'], repeat=j):
            permutation.append(''.join(i))
    # print(permutation)
    answer=0
    permutation.sort()
    answer=permutation.index(word)+1
    return answer