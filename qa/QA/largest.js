let a=30
let b=23
let c=12
let d=34

let max=0
for(let i=0;i<4;i++){
    if(a%2==0){
        max=a
    }
    if(max<b && b%2==0){
        max=b
    }else if(max<c &&c%2==0){
        max=c
    }else if(max<d && d%2==0){
        max=d
    }

}

console.log(max);
