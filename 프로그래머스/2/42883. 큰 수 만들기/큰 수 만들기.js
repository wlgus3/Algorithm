// // 내가 못품
// // https://school.programmers.co.kr/questions/45028

// //stack을 이용해서 풀자
// function solution(number, k) {
//     let rest = k; //뺄 수 있는 글자수 -> 뺄 때마다 줄여갈 예정
//     let newarr = number.split("");
//     newarr.reverse(); //그냥 shift()하면 시간복잡도 손해
//     let select = [];
//     while (newarr.length > 0 && rest > 0) {
//         //끝까지 순회했거나 더이상 뺄 수 없을때까지 반복
//         select.push(newarr.pop()); //newarr의 끝값을 일단 select에 넣어놓고
//         while (Number(select[select.length - 1]) < Number(newarr[newarr.length - 1]) && rest > 0) {
//             //다음나올값과 비교해서 다음나올값보다 작은 수가 이미 select 됐다면 빼준다.
//             rest -= 1;
//             select.pop();
//         }
//     }
//     if (rest !== 0) select = select.slice(0, -rest); //뺄 수 있는 게 남았다면 ==너무 많이 골랐으면 , 앞에서부터 잘라준다.

//     return select.join("") + newarr.reverse().join(""); // 선택되지 못한 요소가 newarr에 있다면 붙여준다.
// }



// function solution(number, k) {
//     //순회하면서 max를 갱신해야함
//     var answer=''
//     let maxNum=0
//     let except=k
//     for(let i=0;i<number.length;i++){
//         let nowNum=Number(number[i])
//         if(answer.length+except-i ==0){
//             if(nowNum>=)
//         }
//         // 2 +          3+      +5 =10
//         if (nowNum>maxNum){//선택한 최대값보다 크면 다 버리고 
//             maxNum=nowNum
//             except-=answer.length
//             answer+=String(nowNum)
//         }else if(nowNum==maxNum){
            
//         }
        
//         //이전에 선택한 최대값과 같으면 선택,
        
        
        
        
//     }
//     return answer
// }


//  https://han-joon-hyeok.github.io/posts/programmers-making-the-biggest-number/
function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}