function flatten(arrays) {
 const result=arrays.reduce((acc,value,)=>[...acc,...value])
 return result
}

const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]