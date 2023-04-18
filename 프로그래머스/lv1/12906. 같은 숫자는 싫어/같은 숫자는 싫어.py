def solution(arr):
    answer = []
    for i in arr:
        if len(answer)==0 or answer[len(answer)-1]!=i:
            answer.append(i)
        else:
            continue
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    return answer