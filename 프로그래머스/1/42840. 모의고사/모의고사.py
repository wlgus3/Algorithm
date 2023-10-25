# def solution(answers):
#     answer = [1]
#     answer1=[1,2,3,4,5]
#     answer2=[2, 1, 2, 3, 2, 4, 2, 5]
#     answer3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
#     correct=[0,0,0]
#     for i in range (len(answers)):
#         if answers[i]==answer1[i%5]:correct[0]+=1
#         if answers[i]==answer2[i%8]:correct[1]+=1
#         if answers[i]==answer3[i%10]:correct[2]+=1
#     print(correct)
#     maxCorrect=correct[0]
#     for i in range (1,len(correct)):
#         if correct[i] > maxCorrect:
#             answer=[i+1]
#             maxCorrect=correct[i]
#         elif correct[i] == maxCorrect:answer.append(i+1)
#         print(answer)
#     return answer

def solution(answers):
    person1=[1, 2, 3, 4, 5]
    person2=[2, 1, 2, 3, 2, 4, 2, 5]
    person3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    correct=[0,0,0] #각자 맞은 문제 수 누적할 배열 
    answer=[]
    for i in range(len(answers)):   #정답지 보면서 각자 답안하고 비교하고 correct에 맞은 수 누적하기
        if answers[i]== person1[i%len(person1)]:
            correct[0]+=1
        if answers[i]== person2[i%len(person2)]:
            correct[1]+=1
        if answers[i]== person3[i%len(person3)]:
            correct[2]+=1
    maxcorrect= max(correct)
    for index,j in enumerate(correct):  #enumerate는 인덱스와 값 함께 순회할 수 있음
        if j == maxcorrect:
            answer.append(index+1)
    return answer