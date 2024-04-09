//progresses:일의 진행률arr =[93, 30, 55]
//speeds : 일의 하루 진행속도arr =	[1, 30, 5]
//매일의 배포마다 몇개의 기능이 배포되는지 배열로 반환
function solution(progresses, speeds) {
    let answer = [];
    let tmp = [...progresses]
    let dayCal=[]   // 각 기능이 몇일 뒤에 완료될지 정리할 배열
    for (let i=0; i<tmp.length;i++){
        let howMuchDays=Math.ceil((100-tmp[i])/speeds[i])
        dayCal.push(howMuchDays)
    }
    // console.log(dayCal)
    
    let pointer=0  //배포기준이 되는 function 가리킴
    //순회하면서 '현 기능'이 '배포기준 기능'보다 오래걸릴 예정인지 확인, 배포기준보다 오래걸리면 배포기준~ 직전 까지 한 번에 배포하고, 현 기능 이후를 새롭게 배포 
    dayCal.forEach((el,idx)=>{
        if (idx==dayCal.length-1){  //dayCal의 마지막 요소일때
            if(el>dayCal[pointer]){
                answer.push(idx-pointer)
                pointer=idx
            }
            answer.push(idx-pointer+1)  //배포기준~ 현재까지 배포 
        }
        else if (el>dayCal[pointer]){    //현F가 배포기준F보다 오래걸림
            answer.push(idx-pointer)    //직전 F까지 배포 
            pointer=idx     //배포기준 F를 현F로 바꿈
        }
    })
    return answer;
}