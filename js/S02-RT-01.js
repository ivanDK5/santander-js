const time = 25;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time <=24) {
  greeting = "Good evening";
}else{
  greeting="Invalid time, Please insert a valid time"
}

console.log(greeting) // Good afternoon