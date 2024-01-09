// k=현재 피로도, dungeons=[[최소 필요피로도, 소모 피로도],[,],[,] ...]
// 탐험할 수 있는 최대 던전 수를 return 
function solution(k, dungeons) {
    let answer = 0
    //dfs로 전체 경우의 수 순회 -> visited=[] , dfs( stemina, counter)
    let visited=Array(dungeons.length).fill(false)  //방문여부 기록할 배열
    let maxCounter=0
    
    function dfs(stemina, counter){
        // console.log(counter, maxCounter,visited)     //이 코드들 전부 필요없음 
        // if(stemina<0){
        //     maxCounter=Math.max(maxCounter,counter-1)
        //     return
        // }
        // if(counter==dungeons.length){
        //     maxCounter=counter
        //     return
        // }
        for(let i=0; i<dungeons.length; i++){
            // if(!visited[i]&& stemina>=dungeons[i][0] &&stemina-dungeons[i][1]>=0){  //방문한적 없고 && 최소필요 스테미나 충족 && 던전 돌기에 충분한 스테미나면 
            if(!visited[i]&& stemina>=dungeons[i][0] ){  //방문한적 없고 && 최소필요 스테미나 충족 && 던전 돌기에 충분한 스테미나면 
            
                visited[i]=true
                dfs(stemina-dungeons[i][1],counter+1)
                visited[i]=false
            }
        }
        return maxCounter=Math.max(maxCounter,counter)  //그냥 마지막에 return 문으로 maxCounter 최대로 유지만 하면서 순회하면 됨
    }
    dfs(k, 0)
    answer=maxCounter
    return answer;
}

