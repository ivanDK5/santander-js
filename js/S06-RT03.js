const Triangle = function(a, b, c) {
  this.a=a;
  this.b=b;
  this.c=c;
  this.getPerimeter=()=> this.a+this.b+this.c
  
}

const triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6