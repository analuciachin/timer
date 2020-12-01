const times = process.argv.slice(2);
//console.log('times: ', times);

let timesNum = [];
let delay = 0;

for (let i = 0; i < times.length; i++) {
  if (times[i] > 0) {
    timesNum.push(Number(times[i]));
  } else continue
}
//console.log(timesNum);

timesNum.sort(function(a, b) {
  return a - b;
});
//console.log('sorted: ', timesNum);

for (const item of timesNum) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, item * 1000);  
}