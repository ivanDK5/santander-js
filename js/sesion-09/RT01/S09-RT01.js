document.querySelectorAll("img").forEach((e)=>{
    let node= document.createTextNode(e.alt)
    e.parentNode.replaceChild(node,e)
})