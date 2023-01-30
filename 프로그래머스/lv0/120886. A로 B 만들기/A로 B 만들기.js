


function solution(before, after) {
  var answer = 0;
  const arr=after.split('')
  for (i of before){

    const idx=arr.indexOf(i)

    if(idx!==-1){
      arr.splice(idx, 1);
    }
  }


  if (arr.length ===0){answer=1}
  else{answer=0}

  return answer;
}
