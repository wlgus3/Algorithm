function solution(array) {
    var answer = 0;
    //최빈값 두개면 -1 하나면 최빈값 리턴
    let obj={}
    for(i=0;i<array.length;i++){
        if (obj.hasOwnProperty(array[i])){
            obj[array[i]]+=1
        }
        else{
            obj[array[i]]=1
        }
    }
    let list=Object.values(obj) //세어놓은 값만 담은 list
    let maxcount=Math.max(...list) 

    
    if (list.indexOf(maxcount)!==list.lastIndexOf(maxcount)){
        answer= Number(-1)
    }
    else{answer=Object.keys(obj).find(key => obj[key] === maxcount);
        }
    
    
    return Number(answer);
}