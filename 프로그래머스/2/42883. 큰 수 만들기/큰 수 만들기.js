
//실패
// function solution(number, k) {
//     var answer = '';
//     //안뽑아도 되는 n개 있다고 치면 number.length-n 만 뽑으면 됨
//     //idx=0부터 순회하면서 ->시간복잡도 걸리겠는데 ...
//     let n=number.length-k
//     let max=0
//     let count=0
//     let nlength=number.length
//     for ( i of number){
//         if(nlength=n+count+i){ //6개중에 9:2 count:2 라면 4에서 멈춰야함
//             for (j in range(count)){
//                 answer+= String(max)
                
//             }
//         }
//         if(number[i]=='9'){
//             answer+=number[i]
//             n-=1
//             max=0
//             count=0
//         }else if(Number(nubmer[i])>=max){
//             max=Number(nubmer[i]
//             if (Number(nubmer[i])==max){
//                 count+=1
//             }else{count=1}
//         }
        
//     }
//     return answer;
// }

function solution(number, k) {
    let stack = [];

    let arr = number.split('').reverse();

    while(arr.length && k>0){
        stack.push(arr.pop())
        while(stack[stack.length-1] < arr[arr.length-1] && k>0) {
            stack.pop();
            k = k-1;
        }
    }

    if(k !== 0) stack = stack.slice(0, -k) 

    return stack.join('') + arr.reverse().join('')
}