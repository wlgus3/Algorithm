function solution(s) {
  //최소값과 최대값 반환 
  const arr= s.split(' ')
  let min = Number(arr[0])
  let max = Number(arr[0])
  for(i of arr ){
      if (Number(i)<min){
          min= i
      }
  }
  for(j of arr){
      if (Number(j)>max){
          max= j
      }
  }
  var answer = '';
  answer+= String(min)
  answer+= ' '
  answer+= String(max)
  return answer;
}