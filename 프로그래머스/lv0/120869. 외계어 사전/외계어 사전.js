// 어려움 
function solution(spell, dic) {
    // 한번씩만 !!! 모두 사용한 단어! 두번 쓰면 안되고 어떤 알파벳을 안 써도 안됨
    const isThere = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if(word.includes(item)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            isThere.push(word);
        }
    })
    
    return isThere.length === 0 ? 2 : 1;
}