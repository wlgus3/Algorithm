function solution(quiz) {
  var answer = [];
  //-는 붙어있음 split(' ')
  for(i of quiz){
    let splitArr= i.split(' ');
    if(splitArr[1]==='+'){
      if((Number(splitArr[0])+Number(splitArr[2]))===Number(splitArr[4])){
        answer.push('O')
      }
      else{
        answer.push('X')
      }
    }
    else{
      if((Number(splitArr[0])-Number(splitArr[2]))===Number(splitArr[4])){
        answer.push('O')
      }
      else{
        answer.push('X')
      }
    }

  }
  return answer;
}