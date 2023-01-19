function solution(dots) {
  let x=[]
  let y=[]
  for( i of dots){
      x.push(i[0])
      y.push(i[1])
  }
  let answer=(Math.max(...x)-Math.min(...x))*(Math.max(...y)-Math.min(...y))
  return answer;
}