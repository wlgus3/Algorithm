function check(num){
    let num2=num.toString(2)
    let arr2=num2.split('')
    arr2.sort((a,b)=>b-a)
    let count= (arr2.filter(el=>el==='1')).length
    return count
}
function solution(n) {

    let N=n.toString(2)
    let arr=N.split('')
    arr.sort((a,b)=>b-a)
    let count=(arr.filter(el=>el==='1')).length
    let next=n+1
    while ( check(next)!==count ){
        next++
    }
    return next;
}