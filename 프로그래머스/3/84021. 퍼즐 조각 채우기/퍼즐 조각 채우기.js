// function solution(game_board, table) {
//     //10:39~
//     //회전만 가능
//     //구멍에 여러 조각 채우기 가능
    
//     //table순회하면서 조각 확보 및 *4가지 만들기 ->최대 18*4=72
    
//     //게임보드 빈칸 순회하면서 빈칸등장-> 도형 순회하면서 딱 맞게 들어갈 수 있는 조각 먼저 넣기 
//     //36*72
//     //딱맞게 들어가는 조각 있다면 game_board 빈칸 메꾸기 

    
//     //도형 가짓수 32
//     const answer = 0;
    
    
    
//     return answer;
// }

function moveBlock(block){
    let minX = Math.min(...block.map(v=>v[0]))
    let minY = Math.min(...block.map(v=>v[1]))
   
    return block.map(v=>[v[0]-minX,v[1]-minY]).sort()
}

function rotate(block){
    let max = Math.max(...block.map(v=>Math.max(v[0],v[1])))
    let rotateBlock=block.map(v=>[max-v[1],v[0]])
   
    return moveBlock(rotateBlock)
}

function bfs(start, table, k){
 const dx = [0,0,1,-1]
 const dy = [1,-1,0,0]
 let needVisit = start
 let block = []
 while(needVisit.length>0){
     let [cx,cy]=needVisit.shift()
     block.push([cx,cy])
     for(let i=0;i<4;i++){
         let nx=cx+dx[i]
         let ny=cy+dy[i]
       
         if(nx<0||ny<0||nx>=table.length||ny>=table.length) continue;
         else if(table[nx][ny]===k) continue;
         else {
             needVisit.push([nx,ny])
             table[nx][ny]=k
         }
     }
 }
    return moveBlock(block)
}

function solution(game_board, table) {
    let blanks=[]
    let blocks=[]
 for(let i=0;i<game_board.length;i++){
     for(let j=0;j<game_board.length;j++){
         if(game_board[i][j]===0){
             game_board[i][j]=1
             blanks.push(bfs([[i,j]],game_board,1))
         }
     }
 }
    for(let i=0;i<table.length;i++){
     for(let j=0;j<table.length;j++){
         if(table[i][j]===1){
             table[i][j]=0
             blocks.push(bfs([[i,j]],table,0))
         }
     }
 }
    let answer=0
    blocks.forEach((val)=>{
        for(let i=0;i<blanks.length;i++){
            let match=false
            for(let j=0;j<4;j++){
                val=rotate(val)
            if(JSON.stringify(val)===JSON.stringify(blanks[i])){
                blanks.splice(i,1)
                answer+= val.length
                match=true
                break;
            }
            }
            if(match) break;
        }
    })
return answer 
}