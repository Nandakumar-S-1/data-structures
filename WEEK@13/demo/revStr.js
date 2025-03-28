function reverseStriing(str){
    return str.split(' ').map((i)=>i.split('').reverse().join('')).join(' ')
}
console.log(reverseStriing("Nanda kumar"));
