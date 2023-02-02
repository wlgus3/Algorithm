function solution(str) {
  var answer = '';
  let uniqueArr=[]
  for ( i of str){
    if (!uniqueArr.includes(i)){
      uniqueArr.push(i)
      }
    }
  for (j of uniqueArr){
    answer+=j
  }
  
  return answer;
}