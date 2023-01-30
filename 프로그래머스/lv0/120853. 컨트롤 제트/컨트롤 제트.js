function solution(s) {
  var answer = 0;
  const arr=s.split(' ')
  for( i=0;i<arr.length;i++){
    if ( arr[i] !=='Z'){
      answer+=Number(arr[i])
    }else{
      answer-= arr[i-1]
    }
  }
  return answer;
}