// let fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('test.txt').toString().split('\n');



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; 

rl.on('line', function(line){
    input.push(parseInt(line)); 
}).on('close', function(){
    let print = (i, str)=>{
        if(i != 0){
            let tempStr = str;
            for(let j = 0; j<tempStr.length; j++){
                str += " ";
            }
            str += tempStr;
            return str;
        }
        else{
            str = "-";
            return str;
        }
    }



    for(let i = 0; i<input.length; i++){
        let data = new String();
        for(let j = 0; j<=parseInt(input[i]); j++){
            data = print(j, data);
        }
        console.log(data);
    }

    process.exit();
})