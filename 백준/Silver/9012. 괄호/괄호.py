n = int(input())

for i in range(n):
    arr= list(input())
    answer='YES'
    tempt=[]
    for i in arr:
        if i =='(':
            tempt.append(')')
        else:
            if tempt==[]:
                answer='NO'
                continue
            if tempt[-1]==')':
                tempt.pop()
            else: 
                answer='NO'
                continue
    if tempt!=[]:
        answer='NO'
    print(answer)