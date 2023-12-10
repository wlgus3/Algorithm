function solution(genres, plays) {
    let answer = [];
    let obj={}
    let sum=[]
    for( let i=0 ; i<genres.length;i++){
        for(let j=0;j<=sum.length;j++){
            if(j== sum.length){
                sum.push([genres[i],plays[i]])
                break
            }else{
                if(sum[j][0]==genres[i]){
                    sum[j][1]+=plays[i]
                    break
                }
            }
        }
        if(genres[i] in obj){
            obj[genres[i]].push([plays[i],i])
        }else{
            obj[genres[i]]=[[plays[i],i]]
        }
        obj[genres[i]].sort((a,b)=>b[0]-a[0])
    }
    
    sum.sort((a,b)=>b[1]-a[1])
    for (g of sum){
        if(obj[g[0]].length==1){
            answer.push(obj[g[0]][0][1])
        }else{
            answer.push(obj[g[0]][0][1])
            answer.push(obj[g[0]][1][1])
        }
    }
    console.log(obj,sum)
    return answer;
}
