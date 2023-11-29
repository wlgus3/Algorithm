//n : 학생수 :2<= n <=30
//lost: 도난당한 학생들 번호: [...] /  reserve:여벌 체육복 가져온 학생들 번호 : [...]
//return : 체육수업 들을 수 있는 학생 최대값 
function solution(n, lost, reserve) {
    let count=0
    let postlost=-1
    let postreserve=-1
    //학생 번호 1~n까지 순회하면서 reserve에 lost에 있는지,reserve에 있는지 확인하면서 순회
    for (let i=1; i<=n;i++){
    //직전 reserve, 직전 lost 여부 확인하면서 전진하고 
        if(lost.includes(i)){ //도난
            if (reserve.includes(i)){ //도난, 여유분o
                count+=1
            }else if(postreserve==i-1){ //도난, 이전 여유분o
                count+=1
            }else{ postlost=i} //도난, 이전 여유분x
        }else{
            count+=1
            if(reserve.includes(i)){  //도난x ,여유분 o
                if(postlost==i-1){  //여유분 이전사람 빌려줌
                    count+=1
                }else{  //여유분 있으나 이전사람 못빌려줌
                    postreserve=i
                }
            }
            
        } 
        console.log(i,count)
    //현 번호 lost인지 먼저 확인, 
    //lost 아니면 직전이 lost인지 확인하고 reserve있으면 직전 애한테 빌려준다. 
        
    }
    
    // ooxoxox
    // ___r_r_
    var answer = count;
    return answer;
}