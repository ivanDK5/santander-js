const Vec = function(x, y) {
  
  this.x=x;
  this.y=y;
  Vec.prototype.plus= (e)=> new Vec(this.x +e.x,this.y+e.y);
  Vec.prototype.minus=(e)=> new Vec(this.x-e.x, this.y-e.y);
  Vec.prototype.length=()=> Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));

   
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
