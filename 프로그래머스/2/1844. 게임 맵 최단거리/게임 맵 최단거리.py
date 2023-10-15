#bfs를 쓰겠다
from collections import deque
def solution(maps):
    max = len(maps) #maps 배열의 행
    may = len(maps[0]) # maps 배열의 열
    check = [[0]*may for i in range(max)]
    # check에다가는 그냥 순서만 표시 (순서 == 방문여부)
    # 방문 가능성 (=벽인지 아닌지)는 maps에서 처리
    dy,dx = [-1,0,1,0],[0,1,0,-1]
    q = deque([(0,0)])
    check[0][0] = 1

    while q:
        y,x = q.popleft()
        for i in range(4):
            ny,nx = y+dy[i] ,x+dx[i]
            if 0<=ny<max and 0<=nx<may:
                if check[ny][nx] == 0 and maps[ny][nx] == 1:
                    check[ny][nx] = check[y][x] + 1
                    q.append((ny,nx))
    if check[max-1][may-1] == 0: # 방문하지 못했다면
        return -1
    else:
        return check[max-1][may-1]
    
    
    
# #bfs 함수 작성해서 bfs(0,0)의 값이 1이 나오면 -1을 리턴
# # 나머지의 경우는 bfs(0,0)의 값을 answer에 반환하는 형식으로 짰습니다.
# from collections import deque
# def solution(maps):
#     answer = 0
#     n = len(maps)
#     m = len(maps[0])
#     dx = [-1, 1, 0, 0]
#     dy = [0, 0, -1, 1]

#     def bfs(x,y):
#         q = deque()
#         q.append((x,y))

#         while q:
#             x, y = q.popleft()
#             for i in range(4):
#                 nx = x + dx[i]
#                 ny = y + dy[i]

#                 if nx < 0 or ny < 0 or nx >= n or ny >= m:
#                     continue
#                 if maps[nx][ny] == 0:
#                     continue
#                 if maps[nx][ny] == 1:
#                     maps[nx][ny] = maps[x][y] + 1
#                     q.append((nx, ny))
#         return maps[n-1][m-1]

#     if bfs(0,0) == 1:
#         return -1
#     else:
#         answer = bfs(0,0)

    return answer