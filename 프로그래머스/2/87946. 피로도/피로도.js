// k=현재 피로도, dungeons=[[최소 필요피로도, 소모 피로도],[,],[,] ...]
// 탐험할 수 있는 최대 던전 수를 return 
// function solution(k, dungeons) {
//     let answer = 0
//     //dfs로 전체 경우의 수 순회 -> visited=[] , dfs( stemina, counter)
//     let visited=Array(dungeons.length).fill(false)
//     let maxCounter=0
    
//     function dfs(stemina, counter){
//         // console.log(counter, maxCounter,visited)
//         if(stemina<0){
//             maxCounter=Math.max(maxCounter,counter-1)
//             return
//         }
//         if(counter==dungeons.length){
//             maxCounter=counter
//             return
//         }
//         for(let i=0; i<dungeons.length; i++){
//             if(!visited[i]&& stemina>=dungeons[i][0]){
//                 visited[i]=true
//                 dfs(stemina-dungeons[i][1],counter+1)
//                 visited[i]=false
//             }
//         }
//     }
//     dfs(k, 0)
//     answer=maxCounter
//     return answer;
// }

function solution(k, dungeons) {
  let answer = -1;
  const dfs = (k, dungeons, prev) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const copy = [...dungeons].map((v) => [...v]);
      copy[i] = [null, null];
      dfs(k - use, copy, prev + 1);
    }
    return (answer = Math.max(prev, answer));
  };
  dfs(k, dungeons, 0);
  return answer;
}