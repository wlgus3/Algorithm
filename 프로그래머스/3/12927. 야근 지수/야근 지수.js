// works를 내림차순으로 정렬해서 n이 0이 될 때까지 가장 큰 수부터 깎는다.
function solution(n, works) {
    let answer = 0;
    let restTime= n
    const sortedWorks= works.sort((a,b)=>b-a)
    let pointer=0
    while (restTime>0){
        //최대값인 두 일감 사이의 차이
        const betweenMaxDiff= sortedWorks[pointer]-sortedWorks[pointer+1]
        if( betweenMaxDiff >0){
            // if(betweenMaxDiff)
            if (betweenMaxDiff*(pointer+1)<=restTime ){
                for(let i=0 ; i<=pointer; i++){
                    sortedWorks[i]-=betweenMaxDiff
                    restTime-=betweenMaxDiff
                }
            }
            else {
                //포인터까지의 모든 요소에 일괄적으로 빼줄 수 있는 최대값
                const maxMinus= Math.floor(restTime/(pointer+1))
                for(let i=0 ; i<=pointer; i++){
                    sortedWorks[i]-=maxMinus
                    restTime-=maxMinus
                }
                // restTime= restTime%pointer
                let newPointer=0
                while(restTime){
                    sortedWorks[newPointer]-=1
                    restTime-=1
                    newPointer+=1
                }
            }
        }
        if(pointer===sortedWorks.length-1){
            const maxMinus= Math.floor(restTime/(pointer+1))
            
            for(let i=0 ; i<=pointer; i++){
                sortedWorks[i]-=maxMinus
                restTime-=maxMinus
            }
            let newPointer=0
            while(restTime>0){
                sortedWorks[newPointer]-=1
                restTime-=1
                newPointer+=1
            }
        }
        pointer+=1
        // if( sortedWorks[])
    }
    if(sortedWorks[0]<0){
        answer=0
    }else{
        sortedWorks.forEach((el,idx)=>{
            answer+=el**2
        })
    }
    return answer;
}