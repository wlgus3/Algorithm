function solution(genres, plays) {
    let answer = [];
    let arrangedObj={}  //장르마다 정리할 object
    let genresPlaysSum=[]  //장르별 재생수 합한 배열
    for( let i=0 ; i<genres.length;i++){    
        for(let j=0;j<=genresPlaysSum.length;j++){
            if(j== genresPlaysSum.length){
                genresPlaysSum.push([genres[i],plays[i]])
                break
            }else{
                if(genresPlaysSum[j][0]==genres[i]){
                    genresPlaysSum[j][1]+=plays[i]
                    break
                }
            }
        }
        if(genres[i] in arrangedObj){
            arrangedObj[genres[i]].push([plays[i],i])
        }else{
            arrangedObj[genres[i]]=[[plays[i],i]]
        }
        arrangedObj[genres[i]].sort((a,b)=>b[0]-a[0])
    }
    console.log(arrangedObj)
    console.log(genresPlaysSum)
    
    genresPlaysSum.sort((a,b)=>b[1]-a[1])  //
    // for (g of genresPlaysSum){
    //     if(arrangedObj[g[0]].length==1){
    //         answer.push(arrangedObj[g[0]][0][1])
    //     }else{
    //         answer.push(arrangedObj[g[0]][0][1])
    //         answer.push(arrangedObj[g[0]][1][1])
    //     }
    // }
    genresPlaysSum.forEach((el,idx)=>{
        if(arrangedObj[el[0]].length==1){
            answer.push(arrangedObj[el[0]][0][1])
        }else{
            answer.push(arrangedObj[el[0]][0][1])
            answer.push(arrangedObj[el[0]][1][1])
        }
    })
    console.log(arrangedObj,genresPlaysSum)
    return answer;
}
