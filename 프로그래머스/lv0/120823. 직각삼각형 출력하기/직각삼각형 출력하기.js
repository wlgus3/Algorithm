const readline = require('readline'); //readline 모듈 불러오기 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input =[];

rl.on('line', function (line) {
    input = line.split(' ');
})
rl.on('close', function () {
    let num = Number(input[0])
    let result=''
    for ( i=0; i<num;i++){
        for(j =0; j <=i; j++){
           result =result+'*'
        }
    
    result+='\n'
        // process.exit()
}
    console.log(result)
});
// }