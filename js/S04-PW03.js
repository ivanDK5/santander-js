
function frequency(string) {
  let result=[], cadena=Array.from(string);
  let cont=1;
  while(cadena.length!=0){
    for(let j=cadena.length;j>0;j--){
      if(cadena[0]==cadena[j]){
        cont++;
        cadena.splice(j,1);
      }
    }
    result.push(`${cadena[0]}:${cont}`);
    cadena.splice(0,1);
    cont=1;
  }
  return result;
 }
 
 console.log('Test 1:', frequency('cccbbbaaa'))
 // {a: 3, b: 3, c: 3}
 console.log('Test 2:', frequency('www.bedu.org'))
 // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
 console.log('Test 3:', frequency('john.doe@domain.com'))
 // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}