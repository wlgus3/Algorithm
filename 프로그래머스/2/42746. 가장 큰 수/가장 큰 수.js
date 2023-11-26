function solution(numbers) {
    var answer = '';
    let arr=[]
    for (let i=0;i<numbers.length;i++){
        let tmp =(String(numbers[i]).repeat(4)).slice(0,4)
        arr.push([tmp,i])
    }
    // console.log(arr)
    arr.sort((a,b)=>Number(b[0])-Number(a[0]))
    // console.log(arr)
    for (j of arr){
        answer+=numbers[j[1]]
    }
    return Number(answer)==0?'0':answer;
}