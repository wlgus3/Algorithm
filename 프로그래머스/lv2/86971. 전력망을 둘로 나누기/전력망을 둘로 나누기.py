from collections import deque, defaultdict

def solution(n, wires):
    wires = [[i-1, j-1] for i, j in wires]
    routes = [[] for _ in range(n)]
    vals = [defaultdict(int) for _ in range(n)]
    for i, j in wires:
        routes[i].append(j)
        routes[j].append(i)
    tovisit = deque(range(n))
    minv = n
    while len(tovisit) > 1:
        tovisit.rotate()
        cn = tovisit[-1]
        if len(routes[cn]) == len(vals[cn])+1:
            tovisit.pop()
            v = 1
            for i in routes[cn]:
                if not vals[cn][i]:
                    nn = i
                v += vals[cn][i]
            vals[nn][cn] = v
            minv = min(minv, abs(n-2*v))
    return minv
