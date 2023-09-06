

def solution(players, callings):

    playerDict = dict()
    for idx, player in enumerate(players):
        playerDict[player] = idx
    for player in callings:
        idx = playerDict.get(player)
        frontPlayer = players[idx - 1]
        playerDict[player] = idx - 1
        playerDict[frontPlayer] = idx
        players[idx - 1] = player
        players[idx] = frontPlayer
    return players