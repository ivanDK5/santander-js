

function createPhoneNumber(param){
    return (`(${param.slice(0,3)}) ${param.slice(4,7)}-${param.slice(8-10)}`);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"