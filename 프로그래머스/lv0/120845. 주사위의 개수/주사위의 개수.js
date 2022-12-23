function solution(box, n) {

    let list=[]
    for (i of box){
        list.push(Math.floor(i/n))
    }
    return list[0]*list[1]*list[2]

}