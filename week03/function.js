// Function เป็น blog ของ javascript code และสามารถใช้ได้หลายครั้ง พอfunctionใช้เสร็จ

// 1. declaration
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// share function to new operator
function sum(a, b) {
  return a + b;
}

const x = sum;
console.log(x(1, 2));

// 2. function expression = funcition เป็นนิพจน์
const sum2 = () => a + b;
//ถ้าใส่ปีกกาที่ arrow เราต้อง return เอง
const sum9 = () => {
  return a + b;
};

// 3. funtion parameter

function applyMap(mapFn, arr, callback) {
  return mapFn(arr, callback);
}

const result = applyMap(
  (arr, fn) => arr.map(fn),
  [1, 2, 3, 4],
  (x) => x * 2
);

console.log(result);

// 4. Arrow Function Expression
let sum = (a, b) => a + b;
let echo = str => str ; // ตัวเดียวไม่ต้องมี()
const LowerCaseString = (temp) => {
    const test = temp.toLowerCase();
    return test

}


console.log(LowerCaseString("Hello"));

// 5. Higher order function
function executeFunction(fn, ...args) {
  return fn(...args);
}

function plusAll(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(executeFunction(plusAll, 1, 2, 3, 4, 5));



function DoSomeThing(a,b,...c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(c);
    return(arguments.length);
}

console.log(DoSomeThing(1,4,65,3,3,3));

function sum(...numbers) {
    let ans = 0
    for (let i = 0; i < arguments.length; i++) {
        ans += arguments[i]
    }
    return ans
}
console.log(sum(1,3,5,7,8,9,565));
//ไม่มีค่าเลยกับค่าตั้งต้น= underfine || null คือรอใส่ค่า

function DoSomeThing(g = "hi",g2 = "HELLO" , g3 = "olaf") {
    return [g,g2,g3]
}

console.log(DoSomeThing(undefined,undefined,3));