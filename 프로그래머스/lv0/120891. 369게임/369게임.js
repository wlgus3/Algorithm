function solution(order) {
  let count=0
  let split= order.toString().split('')
  for (i of split){
    console.log(i)
      if(i==='3'||i==='6'||i==='9'){
          count +=1
      }
  }
  return count;
}