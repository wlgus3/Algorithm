function solution(my_string) {
    var answer = null;
    let arr= my_string.split(' ')
    console.log(arr)
    let i=0
    while (i <= arr.length-1){
        if (answer==null){
            answer=Number(arr[i])
            i+=1
        }else if (arr[i] =='+'){
            answer=answer+Number(arr[i+1])
            i+=2
        }else if (arr[i] =='-'){
            answer=answer-Number(arr[i+1])
            i+=2
        }
    }
    return answer;
}