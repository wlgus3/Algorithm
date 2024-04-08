//clotes=[['아이템',아이템 분류'],[...], ...]

function solution(clothes) {
    let answer = 1;
    let obj={}
    for ( i of clothes){    //clothes 순회하면서 1번인덱스 기준으로 object에 정리 
        // if (Object.keys(obj).includes(i[1])){    
        // if (i[1] in obj){
        if (obj.hasOwnProperty(i[1])){
            obj[i[1]].push(i[0])
        }else{
            obj[i[1]]=[i[0]]
        }
    }
    for (key in obj){ //key를 기준으로 아이템 착용 경우의 수대로 곱해준다.
        answer=answer*(obj[key].length+1)
    }
    return answer-1;// 아무것도 착용하지 않은경우 제외 
}

// function solution(clothes){
//     let result=0
//     //2차원 배열 clothes주어지고, 서로 다른 옷의 조합의 수를 return 
//     let clothesObj={}
//     // clothes.reduce((el)=>{
//     //     clothesObj[el[1]]=clothesObj[el[1]]? [...clothesObj[el[1]],el[0]] : [el[0]]
//     // })
//     for (let i =0 ; i<clothes.length; i++){
//         if (clothesObj[clothes[i][1]]){
//             clothesObj[clothes[i][1]].append(clothes[i][0])
//         }else { clothesObj[clothes[i][1]]=[clothes[i][0]]}
//     }
//     console.log(clothesObj)
    
//     return result
// }