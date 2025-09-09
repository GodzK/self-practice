console.log(Array.isArray({})); // false
console.log(Array.isArray(new Array(2)));// true
console.log(Array.isArray("{}")); //false
console.log(Array.isArray([])); // true
console.log(Array.isArray(false)); // false


const arr1  = [1,2,3]
const arr2 = [4,5,6]

//concat
console.log([...arr1,...arr2]);
console.log(arr1.concat(arr2));

//toString
console.log(arr1.toString());
console.log(arr1.join(",")); // can add separator


// export default function hello(params) {
    
// }

console.log("Mango".includes("o"));
console.log(arr1.includes(1));


const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); 

(a, b) => b - a

// เป็น callback function ที่ส่งเข้าไปให้ sort() เพื่อกำหนดวิธีการเปรียบเทียบ

// การทำงาน:

// ถ้า ค่าที่ return < 0 → a จะถูกจัดไว้ก่อน b

// ถ้า ค่าที่ return > 0 → b จะถูกจัดไว้ก่อน a

// ถ้า return = 0 → ตำแหน่งไม่เปลี่ยน

// 👉 b - a หมายถึง:

// ถ้า b มากกว่า a → ได้ค่าบวก → b ต้องมาก่อน a

// สรุปคือ เรียงจากมาก → น้อย (Descending order)