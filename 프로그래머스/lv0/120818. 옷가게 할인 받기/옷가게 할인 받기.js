function solution(price) {
    var answer = 0;
    if(price<100000){answer=price}
    if ( 300000 > price && price >= 100000){
        answer = Math.floor(price*0.95)
    }
    if (500000> price && price>=300000){
        answer = Math.floor(price*0.9)
    }
    if (price >=500000){
        answer = Math.floor(price*0.8)
    }
    
        
    return answer;
}