function loop(start, test, update, body) {
  for(i=start;test(i);i=update(i)){
    body(i)
  }
}

const test = function(n) {
  return n > 0;
}

const update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1

