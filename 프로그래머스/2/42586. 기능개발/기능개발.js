//progresses:일의 진행률arr =[93, 30, 55]
//speeds : 일의 하루 진행속도arr =	[1, 30, 5]
//매일의 배포마다 몇개의 기능이 배포되는지 배열로 반환
function solution(progresses, speeds) {
    let answer = [];
    let tmp = [...progresses]
    let dayCal=[]
    for (let i=0; i<tmp.length;i++){
        let howMuchDays=Math.ceil((100-tmp[i])/speeds[i])
        dayCal.push(howMuchDays)
    }
    console.log(dayCal)
    
    let pointer=0
    dayCal.forEach((el,idx)=>{
        if (idx==dayCal.length-1){
            if(el>dayCal[pointer]){
                answer.push(idx-pointer)
                pointer=idx
            }
            answer.push(idx-pointer+1)
        }
        else if (el>dayCal[pointer]){    //최대보다 오래걸리면?
            answer.push(idx-pointer)
            pointer=idx
        }
    })
    return answer;
}