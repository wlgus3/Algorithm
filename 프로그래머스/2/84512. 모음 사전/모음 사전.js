/*
단어 input 받아서 단어 철자로 만들 수 있는 모든 단어를 담은 사전에서 몇 번째 단어인지 return 

! 방법:
1. 단어를 array 형태로 나누어서 
2. 순열 구현해서 모든 경우의 수 모은다.
3. 경우의 수 사전에 맞게 오름차순 정렬 후 순서 구함

*/

function solution(word) {
    let answer = 0;
    let arr= ['A', 'E', 'I', 'O', 'U']
    let dictionary=[]
    for(let i=1; i<=5;i++){
        let permutationList=permutation(arr,i)
        // console.log(permutationList)
        dictionary=dictionary.concat(permutationList)
    }
    dictionary.sort()
    // console.log(dictionary)
    answer=dictionary.indexOf(word)+1
    return answer;
}

function permutation(array,length){
    // let visited= Array(array.length).fill(false)
    let result=[]
    function dfs(nowPerArr){
        if (nowPerArr.length==length){    //목표길이 달성시 빠져나오기
            result.push(nowPerArr.join(''))
            // console.log(nowPerArr)
            return
        }
        for(let j=0 ;j< 5;j++){  //
            // if(!visited[j]){
            //     visited[j]=true
            nowPerArr.push(array[j])
            dfs(nowPerArr)
            nowPerArr.pop()
            //     visited[j]=false
            // }
        }
    }
    dfs([])
    return result
}