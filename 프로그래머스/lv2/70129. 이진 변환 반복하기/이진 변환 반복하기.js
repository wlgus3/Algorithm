function solution(s) {
  var answer = [0,0];

  while(s!=='1'){
    s=s.split('')
    let arr=s.filter(el=> el!=='0')
    console.log(arr)
    answer[0]++
    answer[1]+= s.length-arr.length
    console.log(answer)
    s= arr.length.toString(2)
  }
  return answer;
}
