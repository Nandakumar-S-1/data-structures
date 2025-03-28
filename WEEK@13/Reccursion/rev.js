function reversestring(str){
    if(str.length === 0) return ''
    return str[str.length-1] + reversestring(str.slice(0,-1))
  }
  function reverseWord(str){
    if(!str.includes(' ')) return reversestring(str)
    let space = str.indexOf(' ')
    return reversestring(str.slice(0,space)) + " "+ reverseWord(str.slice(space+1))
  }
  console.log(reverseWord(' Devan reji'))