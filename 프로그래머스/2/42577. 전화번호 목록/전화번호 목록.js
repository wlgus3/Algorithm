//번호 array phone_book에서 어떤 번호가 다른 번호의 접두어인지 확인 접두어면 f, 아니면 t
function solution(phone_book) {
    let answer = true;
    phone_book.sort()
    for(let i=0; i<phone_book.length-1; i++){
        if (phone_book[i]==phone_book[i+1].slice(0,phone_book[i].length)){
            answer=false
            break
        }
    }
    return answer;
}