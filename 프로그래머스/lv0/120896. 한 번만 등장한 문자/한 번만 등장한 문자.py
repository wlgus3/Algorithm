def solution(s):
    repeated=[]
    check=[]
    for i in s:
        if i in repeated:
            continue
        elif i in check and i not in repeated:
            repeated.append(i)
        check.append(i)

    print(repeated)
    slist=list(s)
    answer=list(filter(lambda x: x not in repeated , slist))
    print(answer)
    return ''.join(sorted(answer))

# def solution(s):
#     answer = []
#     for i in s:
#         if s.count(i)==1:
#             answer.append(i)

#     return ''.join(sorted(answer))