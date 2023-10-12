
l,p= map(int,input().split())

total=l*p
arr= list(map(int,input().split()))
result=[]
for i in arr:
    result.append(i-total)

print(' '.join(map(str,result)))