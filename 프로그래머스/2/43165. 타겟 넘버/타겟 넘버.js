function solution(numbers, target) {
    var answer = 0;
    //재귀를 만들어서 인덱스와, 합계를 함께 넘기고 인덱스가 끝까지 다다르면 값 비교후 answer+
    const  recursion= (index, sum)=>{
        if (index== numbers.length ){
            if (sum==target) {answer+=1}

            return
        }
        //더하거나 빼는 두가지 경우의 수
        recursion(index+1, sum+ numbers[index])
        recursion(index+1, sum- numbers[index])
        
    }
    recursion(0,0)
    return answer;
}
