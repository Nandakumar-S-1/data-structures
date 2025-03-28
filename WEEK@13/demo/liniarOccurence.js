function findAllOccurrences(arr, target) {
  let indices = [];
  arr.forEach((element, index) => {
    if (element === target){
        indices.push(index);
    }
  });
  return indices;
}
console.log(findAllOccurrences([5,7,5,9,6,9,6,5,5,8],5));
