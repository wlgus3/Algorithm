//survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.
//survey[i]의 첫 번째 = 비동의 선택하면 받는 성격 유형 , 두 번째 캐릭터는 동의 선택지 성격 유형을 의미
// 1:매우 비동의  ~ 4:모르겠음 , 7: 매우 동의 
function solution(survey, choices) {
    let answer = '';
    let obj={'R':0,'T':0,'C':0,'F':0,'J':0,'M':0,'A':0,'N':0}
    for (let i=0;i<survey.length; i++){
        if(choices[i]>4){   //5~7 동의
            obj[survey[i][1]]+=(choices[i]-4)
        }else if(choices[i]<4){ // 1~3 비동의
            obj[survey[i][0]]+=(4-choices[i])
        }
    }
    if(obj['R']<obj['T']){answer+='T'}else{answer+='R'}
    if(obj['C']<obj['F']){answer+='F'}else{answer+='C'}
    if(obj['J']<obj['M']){answer+='M'}else{answer+='J'}
    if(obj['A']<obj['N']){answer+='N'}else{answer+='A'}
    console.log(obj)
    return answer;
}