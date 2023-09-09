def solution(s):
    memo=[]
    for i in s: 
        if not memo and i==')':
            return False
        if i=='(':
            memo.append(')')
        else:
            if memo[-1]==i:
                memo.pop()
            else:
                return False
    if memo==[]:return True
    else:return False
