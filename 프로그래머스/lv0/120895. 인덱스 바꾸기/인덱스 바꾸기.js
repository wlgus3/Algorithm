function solution(my_string, num1, num2) {
  var answer = '';
  let arr=my_string.split('')
  let N1=my_string[num1]
  let N2=my_string[num2]
  arr[num1]=N2
  arr[num2]=N1

  answer=arr.join('')
  
  return answer;
}