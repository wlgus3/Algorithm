// //아이디와 유사, 규칙도 맞는 아이디 추천 
// function solution(new_id) {
//     var answer = '';
//     let tmp=''
//     let submit=['-','_','.']
//     for (i of new_id){
//         if(i.toUpperCase()!=i.toLowerCase()){tmp+=i.toLowerCase()}
//         else{
//             if(Number(i) ||submit.includes(i)){tmp+=i}
//         }
//     }
//     let tmp2=''
//     for (let j=0;j<tmp.length;j++){
//         if ((tmp[j]=='.'&&tmp2=='')||(tmp[j]=='.'&&tmp[j+1]=='.')){
//             continue
//             }
//         else{tmp2+=tmp[j]}
//     }
//     while(tmp2[tmp2.length-1]=='.'){
//         tmp2=tmp2.slice(0,-1)
//     }
//     if (tmp2==''){tmp2='a'}
//     while (tmp2.length<3){
//         tmp2+=tmp2[tmp2.length-1]
//     }
    
//     tmp2=tmp2.slice(0,15)
//     while(tmp2[tmp2.length-1]=='.'){
//         tmp2=tmp2.slice(0,-1)
//     }
//     answer=tmp2
//     return answer;
// }
function solution(new_id) {
    var answer = '';
    const id = new_id.toLowerCase().split("")
    const allowedCharId = allowChar(id)
    const removedDoubblePoint = rmDoubblePoint(allowedCharId)
    const notPointInEnd = rmPointInEnd(removedDoubblePoint)
    const cuttedId = cuttingIdBy15(notPointInEnd)
    const finalId = makeIdUpto3(cuttedId)
    answer = finalId.join("")
    return answer;
}

//------------------------------------------------------

function allowChar(id) {
    return id.filter(char => {
        const c = char.charCodeAt(0)
        if ("a".charCodeAt(0) <= c && c <= "z".charCodeAt(0)) return true
        if ("0".charCodeAt(0) <= c && c <= "9".charCodeAt(0)) return true
        if (char == "-" || char == "_" || char == ".") return true
        return false
    })
}

function rmDoubblePoint(arr) {
    return arr.reduce((acc, c, i, arr) => {
        if (c == "." && arr[i + 1] == ".") return acc;
        acc.push(c)
        return acc
    }, [])
}

function rmPointInEnd(arr) {
    if (arr[0] == ".") {
        arr.shift()
        return rmPointInEnd(arr)
    }
    if (arr[arr.length - 1] == ".") {
        arr.pop()
        return rmPointInEnd(arr)
    }
    if (arr.length == 0) {
        arr.push("a")
    }
    return arr
}

function cuttingIdBy15(arr) {
    const cutted = arr.slice(0, 15)
    return rmPointInEnd(cutted)
}

function makeIdUpto3(arr) {
    if (arr.length < 3) {
        arr.push(arr[arr.length - 1])
        return makeIdUpto3(arr)
    }
    return arr
}
