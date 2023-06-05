def solution(phone_number):
    r = len(phone_number)-4
    answer = '*' * r + phone_number[-4:]
    return answer