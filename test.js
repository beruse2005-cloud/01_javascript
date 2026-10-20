const arr = ['a', 'b', 'c'];
delete arr[1];


console.log(arr); // ['apple', 'banana', <1개의 빈 항목>]

console.log(arr.length);