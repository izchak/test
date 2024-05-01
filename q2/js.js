function numbers(arr) {
  const even = 0;
  const odd = 0;
  const total = arr.length;
  const doplicteNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (doplicteNum.includes(arr[i])) {
      continue;
    } else {
      if (arr[i] % 2 == 0) {
        even++;
        console.log("even");
      } else {
        odd++;
        console.log("add");
      }
    }
  }

  const obj = { even, odd, total };
  return console.log(`even: ${obj.even} odd${obj.odd} total${obj.total}`);
}

numbers([5, 80, 25, 40]);
