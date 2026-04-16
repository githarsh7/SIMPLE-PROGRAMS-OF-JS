// 1) Weird 
console.log([] == ![]);

// 2) Function with Return
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// 3) Array & Loop
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 4) Function & Variable
var x = 190;

function show() {
  var x = 90;
  console.log(x);
}

show();
console.log(x);

// 5) Hoisting & Functions vs Variable
console.log(hello);

var hello = 10;
function hello() {
  return 20;
}

// 6) Truthy  / Falsy
if ("0") {
  console.log("i've to be a web developer");
} else {
  console.log("No");
}

// 7) String + Number
console.log(5 + "5");

// 8) Array Reference
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);

// 9) Hositing Within The Function
function demo() {
  console.log(a);
  var a = 5;
}

demo();

// 10) Block Scope vs Function Scope
if (true) {
  var a = 5;
  let b = 10;
}

console.log(a);
console.log(b);