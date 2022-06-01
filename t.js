const a = [1, 2, 3, 5, 7];
// 1, 2, 3, 5, 7
// 7-5=2
// 5-3=2
// 3-2=1
// 2-1=1
let result = 0;
for (let i = 0; i < a.length; i++) {
  const x = a[a.length - i - 1];
  const y = a[a.length - i - 2];
  if (x - y) {
    result += x - y;
  }
}

console.log("result: ", result);
