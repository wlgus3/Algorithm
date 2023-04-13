// function correct(arr){
//  //14번 테케빼고 모두 통과 
//     let aCount=0
//     let bCount=0
//     let cCount=0
//     let result= false
//     for (i of arr){
//         if(i==='('){
//             aCount+=1
//         }else if( i ===')'){
//             aCount-=1
//         }else if( i==='{'){
//             bCount+=1
//         }else if( i==='}'){
//             bCount-=1
//         }else if( i==='['){
//             cCount+=1
//         }else if ( i===']'){
//             cCount-=1
//         }
//         if(aCount<0||bCount<0||cCount<0){
//             result= false
//             break
//         }


//     }
    
//     if(aCount===0 && bCount===0 && cCount===0){result=true}
//     return result
// }

// function solution(s) {
    
//     var answer = 0
//     let array=s.split('')
//     for (let i =0; i<array.length; i++){
//         array[array.length]=array[0]
//         array.shift()
//         if(correct(array)===true){
//             answer+=1
//         }
//     }
//     if (s.length===1){
//         answer=0
//     }
//     return answer;
// }

function solution(s) {
    const stack = [];
    let result = 0;
    let isRight = true;
    if (s.length % 2 === 1) return 0;

    for (let i = 0; i < s.length; i++){
        let candidate = s.slice(i) + s.slice(0, i);
        isRight = true;
        for (let word of candidate) {
            if (word === "(" || word === "{" || word === "[") stack.push(word);
            else {
                let leftWord = stack.pop();
                if (word === ")" && leftWord === "(") continue;
                if (word === "}" && leftWord === "{") continue;
                if (word === "]" && leftWord === "[") continue;
                isRight = false;
                break;
            }
        }
        if (isRight) result++;
    }
    return result;
}
