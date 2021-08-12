let n = 5;
let str = '*';
let sub = n -1

for (let index=0; index < n; index+=1){
    console.log(str.repeat(n - sub ))
    sub = sub - 1
}
