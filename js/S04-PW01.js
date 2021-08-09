
function deepEqual(a, b) {
  if(a===b)
   return true;
   else {
      if(typeof a=='object'&& typeof b=='object')
       {
       
        console.log("entra obj ");
         if(Object.keys(a)===Object.keys(b)){
          console.log("entra "); 
          deepEqual(Object.values(a),Object.values(b))
           
         }
       }

   }
   return false;
}
 
const john = {
  firstName: 'John',
  lastName: 'Doe'
}
 
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
 
