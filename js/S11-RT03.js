// Don't alter this function
const processAction = (i, callback) => {
    setTimeout(function() {
      callback("Processed Action " + i);
    }, Math.random()*1000);
  }
  
  const triggerActions = (count) => {
        let i=0
        if(i<count)
        processAction(i+1,(e)=>console.log(e))
       
  }

  triggerActions(5)