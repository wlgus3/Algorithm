function solution(array, n) {
  var answer = 0; //부등호 같으면 빼면 됨 다르면 빼면됨
  array= array.sort(function(a,b){return a-b})  //오름차순 정렬 
  const diffarr= array.map(el=>Math.abs(el-n))  //거리 배열
  console.log(array)
  let minDiff= Math.min(...diffarr) //최소 차이 구하기
  // console.log(minDiff)
  // let sortArr= arr.sort(function(a,b){return a-b})  //오름차순 정렬
  let idx=diffarr.findIndex(el=>el===minDiff) //나오는 첫번째 수 
  // console.log(sortArr,idx)
  answer= array[idx]
  return answer;
}