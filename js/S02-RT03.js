let primo
for(let i=0;i<=100;i++){
  primo=true;
 /*  if (i%2==0)
  console.log(`numero par :${i}`)
  if(i%2!=0)
  console.log(`numero impar : ${i}`) */
 
  for(let j=2;j<i;j++){
    if(i%j==0 ){
      primo=false
      break
    }
     
  
  }
 
  
  if(primo==true)
  console.log(`numero primo : ${i}`)
}
