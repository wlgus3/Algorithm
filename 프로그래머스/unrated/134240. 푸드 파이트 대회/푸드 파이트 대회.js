function solution(food) {
    const foodExceptWater = food.slice(1).map(v=>Math.floor(v/2))
    let humanTried = ''
    foodExceptWater.forEach((foodCount,idx)=>{
        if(foodCount > 0)
            humanTried = humanTried.concat(String(idx+1).repeat(foodCount))
    })
    const arrHumanTried = humanTried.split('')
    return [...arrHumanTried,0,...arrHumanTried.reverse()].join('');
}