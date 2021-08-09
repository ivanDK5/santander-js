const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
const objecto={}

car.forEach(element => {
  objecto[element[0]]=element[1];
});

console.log(objecto);