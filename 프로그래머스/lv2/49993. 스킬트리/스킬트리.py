def solution(skill, skill_trees):
    answer = 0
    for tree in skill_trees:
        skillArr= list(skill)
        for j in tree:
            if j in skillArr:
                if j ==skillArr[0]:
                    skillArr.pop(0)
                else:
                    break
            if skillArr==[]:
                answer+=1 
                break
            if j == tree[-1]:answer+=1
            
    return answer