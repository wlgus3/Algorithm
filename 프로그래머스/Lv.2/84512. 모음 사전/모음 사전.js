// /*
// 단어 input 받아서 단어 철자로 만들 수 있는 모든 단어를 담은 사전에서 몇 번째 단어인지 return 

// ! 방법:
// 1. 단어를 array 형태로 나누어서 
// 2. 순열 구현해서 모든 경우의 수 모은다.
// 3. 경우의 수 사전에 맞게 오름차순 정렬 후 순서 구함

// */

// function solution(word) {
//     let answer = 0;
//     let arr= ['A', 'E', 'I', 'O', 'U']
//     let dictionary=[]   //사전 담을 배열
//     for(let i=1; i<=5;i++){ //길이가 1부터 5 까지의 중복순열 모두 모아줄 반복문.
//         let permutationList=permutationWithRepetition(arr,i)
//         dictionary=dictionary.concat(permutationList)
//     }
//     dictionary.sort()   //사전 오름차순
//     answer=dictionary.indexOf(word)+1   //1부터 시작하기위해 +1
//     return answer;
// }

// function permutationWithRepetition(array,length){     //원하는 길이 받아서 중복순열 만들어주는 함수.
//     let result=[]
//     function dfs(nowPerArr){
//         if (nowPerArr.length==length){    //목표길이 달성시 result에 추가 후 함수 종료
//             result.push(nowPerArr.join('')) //문자열 형태 필요하기에 array.join('') 사용
//             return
//         }
//         for(let j=0 ;j< 5;j++){  
//             nowPerArr.push(array[j])
//             dfs(nowPerArr)
//             nowPerArr.pop()
//         }
//     }
//     dfs([])
//     return result
// }


//ㅈㅎ님
// DFS (깊이 우선 탐색) 함수 정의
const dfs = (word, length, result) => {
    // 사용 가능한 모음 배열에 담기
    const wordArr = [..."AEIOU"];
    // 목표 길이에 도달하면 현재 단어를 결과 배열에 추가하고 반환
    if (length === word.length) {
        result.push(word);
        return;
    }

    // 가능한 모음 조합을 반복하여 모든 경우를 탐색
    wordArr.forEach((vowel) => {
        dfs(word + vowel, length, result);
    });
}

// 주어진 단어 찾기 함수
function solution(word) {
    // 결과를 저장할 배열 초기화
    const result = [];
    // 초기 단어 생성
    const str = "";

    // 단어 길이가 1에서 5까지 가능한 모든 경우의 수를 생성
    for (let i = 1; i <= 5; i++) {
        // DFS 함수 호출로 가능한 모음 조합을 찾고 결과 배열에 저장
        dfs(str, i, result);
    }

    // 결과 배열을 알파벳순으로 정렬하고 주어진 단어의 인덱스를 찾아 반환
    return result.sort().indexOf(word) + 1;
}