function solution(a, b, n) {
    //a개 가져다주면 콜라 b병 주는데 n병이면 몇개받음?
    //재귀
    let rest=n
    var drink =-n
    
    while(rest>=a){
        drink+= (Math.floor(rest/a))*a
        rest=rest%a +(Math.floor(rest/a))*b
        console.log(drink,rest)
    }
    drink+= rest
    return drink;
}