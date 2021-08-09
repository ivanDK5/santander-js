const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};

const numeros=[...array1,...array2,...calificaciones.array3];
let suma=0;
for(let i=0;i<=numeros.length;i++){
  primo=true;
  for(let j=2;j<i;j++){
    if(numeros[i]==1){ continue;}
    if(i%j==0){
      primo=false;
      break;
    }
  }
  if(primo==true)
    suma+=i;
}

function esPar(number){
  for(let j=2;j<number;j++){
    if(i%j==0){
     return false;
    
    }
  }
  return number!=1;
}

console.log(`la suma es: : ${suma}`)