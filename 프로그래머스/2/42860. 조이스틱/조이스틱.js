


function solution(name){
    //조이스틱 위아래로 각각 움직여서 name 만들수 있는 최소조작회수 return
    //처음에는 A로만 이루어짐
    var answer=0
    let alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ'//알파벳 총 길이= 26
    let min_move = name.length - 1;
    // console.log(alphabets.indexOf('Z'))
    // indexOf가 13이하=그대로, 14이상= 26-indexOf
    [...name].map((n, i) => {
        answer+= Math.min(alphabets.indexOf(n),26-alphabets.indexOf(n))
        let idx=i+1
        //연속되는 A 개수 세기
        while (idx <name.length &&name[idx]=='A'){
            idx++
        }
        min_move = Math.min(min_move, i * 2 + name.length - idx, i + 2 * (name.length - idx));
        
    })
    return answer+=min_move
}