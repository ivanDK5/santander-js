let card=`<div class="card">
<img src="http://example.com" alt="John Doe">
<h2>John Doe</h2>
<a href="https://example.com/johndoe" target="blank" class="button">
  GitHub
</a>
</div>`


let usersgithub= async()=>{
 
/*     return  fetch(`https://api.github.com/users?per_page=4`)
    .then(response=>{
      return response.json();  
    }).then(data=>{
      return console.log(data);  
    }).catch ((err) => {
      console.error(err)
  }) */

  fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
  .then(response => response.json())
  .then(data => console.log(data));
      
    
  

}




usersgithub()