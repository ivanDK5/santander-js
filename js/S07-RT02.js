function compact(array) {
 return array.filter((e)=>{
    return e
 })
}

const array = [0, 1, false, 2, '', 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]