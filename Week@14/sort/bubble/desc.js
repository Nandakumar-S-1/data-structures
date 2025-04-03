function desSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1])
          [([array[j], array[j + 1]] = [array[j + 1], array[j]])];
      }
    }
    return array;
  }
  
  console.log(desSort([3,6,1,7,9,4,5 ]));