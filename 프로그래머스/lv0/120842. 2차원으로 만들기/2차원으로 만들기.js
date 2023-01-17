function solution(num_list, n) {
  var answer = [[]];
  for (let i=0;i <num_list.length;i++){
    let idx= Math.floor((i)/n)
      console.log(idx)
      if(answer[idx]){
        answer[idx].push(num_list[i])
      }else{
        answer[idx]=[num_list[i]]
      }
  }
  return answer;
}