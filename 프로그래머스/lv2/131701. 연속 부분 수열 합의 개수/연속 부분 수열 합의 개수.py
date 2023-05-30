def solution(elements):
    n = len(elements)
    elements *= 2
    answer = [sum(elements[i:i + limit]) for limit in range(1, n) for i in range(n)]
    return len(set(answer)) + 1