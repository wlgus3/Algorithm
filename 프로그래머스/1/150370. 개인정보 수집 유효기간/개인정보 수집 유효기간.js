function solution(today, terms, privacies) {
    var answer = [];
    //모든 달은 28일까지 있다.
    //today "YYYY.MM.DD" 형태로 오늘 날짜
    //terms 1<=. <=20인 Array  "A 6"형태로 유효기간 유효기간은 1~100
    //privacies 1<=  <=100인 Array  "2021.05.02 A" 형태
    const todayarr=today.split('.')
    let todayNumber=Number(todayarr[0])*10000+Number(todayarr[1])*100+Number(todayarr[2])
    // console.log(todayarr)
    termsobj={}
    for (i of terms){
        let [name,month]=i.split(' ')   //구조분해할당
        termsobj[name]=Number(month)
    }
    // console.log(termsobj)
    let index=1
    for (p of privacies){
        [start,name]=p.split(' ')
        let expmonth=termsobj[name]
        let [year,month,day]=start.split('.')
        day=Number(day)-1
        year= Number(year)+Math.floor(expmonth/12)
        month=Number(month)+(expmonth%12)
        if (day==0){
            month=month-1
            day=28}
        if (month >12){
            month-=12
            year+=1
        }
        console.log(year,month,day,todayarr)
        //삭제할 경우를 찾자 -> 현날짜>데드라인
        let deadline=year*10000+month*100+day
        console.log(deadline,todayNumber)
        if (deadline<todayNumber){
            answer.push(index)
        }
        index+=1
        
        // if (year<Number(todayarr[0])){
        //     answer.push(index)
        // }else if (year>Number(todayarr[0])) {
        //     continue
        // }else if (month<Number(todayarr[1])) {
        //     answer.push(index)
        // }else if (month>Number(todayarr[1])) {
        //     continue
        // }else if (day<Number(todayarr[2])){
        //     answer.push(index)
        // }
        // index +=1
        
    }
    return answer;
}