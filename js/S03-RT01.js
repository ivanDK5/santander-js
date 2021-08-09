const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
let sum=0;
for(const number of numbers ){
sum+=number;
}
console.log("El promedio es: ",sum/numbers.length);