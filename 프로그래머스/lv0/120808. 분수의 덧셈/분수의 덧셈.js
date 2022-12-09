function solution(denum1, num1, denum2, num2) {
    var answer = [];
    let top = denum1*num2+denum2*num1;
    let bottom = num1*num2;
    let greatestCommonFactor = 1;
    for( i=0 ;i<=Math.max(top,bottom);i++){
        if(top%i===0 && bottom%i===0){
            greatestCommonFactor=i
        }
    }
    answer=[top/greatestCommonFactor,bottom/greatestCommonFactor]
    return answer;
}