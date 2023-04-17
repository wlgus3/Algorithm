function solution(nums) {
    var answer = 0;
    //배열에서 다른종류 숫자가 나오면 객체에 추가한다. 
    let obj={}
    for (i of nums){
        if(obj[i]){
            continue
        }else{
            obj[i]=1
        }    
    }
    console.log(obj)
    console.log(obj.length)
    
    return ((nums.length/2>Object.keys(obj).length)?Object.keys(obj).length :nums.length/2)
}
