


function solution(name){
    //조이스틱 위아래로 각각 움직여서 name 만들수 있는 최소조작회수 return
    //처음에는 A로만 이루어짐
    var answer=0
    let alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ'//알파벳 총 길이= 26
    let min_move = name.length - 1; //A가 있던 말던 그냥 정방향으로 쭉 순회하는 이동횟수
    // indexOf가 13이하=그대로, 14이상= 26-indexOf
    [...name].map((n, i) => {
        answer+= Math.min(alphabets.indexOf(n),26-alphabets.indexOf(n))
        let idx=i+1
        //연속되는 A 개수 세기
        while (idx <name.length &&name[idx]=='A'){
            idx++
        }
        //이동의 최소값 구한다.
        // 1. 순서대로 가기,
        // 2. 뒤로 돌아가기 (i까지 온 것 가정하니 *2, 뒤로 돌아서 idx까지 가는 경우) ,
        // 3. 뒷부분을 먼저 입력하기 (뒤로 돌아서 idx까지 방문했다가 돌아오기에 *2 ,다시 i 까지 와야함)
        min_move = Math.min(min_move, i * 2 + name.length - idx, i + 2 * (name.length - idx));
        
    })
    return answer+=min_move
}