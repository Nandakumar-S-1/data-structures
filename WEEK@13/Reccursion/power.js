// Calculate Power Using Recursion

function Power(base,pow){
    if(pow==0){
        return 1
    }
    return base * Power(base,pow-1)
}

console.log(Power(2,3));
