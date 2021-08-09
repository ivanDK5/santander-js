const Group = function() {
  this.array;
  from = function(e) {
    this.array.push([...e]);
  }
  Group.prototype.has=(e)=>this.array.includes(e);
  Group.prototype.add=(e)=>{
    if(!this.array.includes(e))
      this.array.push(e);
  }
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true