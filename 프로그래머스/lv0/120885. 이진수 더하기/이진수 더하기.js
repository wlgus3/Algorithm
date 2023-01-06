function solution(bin1, bin2) {
    
  var answer = '';

  function cal(str) {
    let result=0
    let len=str.length-1
    for (i of str){
      if (i==='1'){
        result+= 2**len
      }
      len-=1
    }
    return result
  }

  let sum= cal(bin1)+cal(bin2)

  answer= sum.toString(2)
  return answer;
}