function deepEqual(objA, objB) {
  // ถ้าเป็นค่าเดียวกันแบบ primitive หรือ reference เดียวกัน
  if (objA === objB) return true;
  console.log(objA,objB);
  // ถ้าไม่ใช่ object หรือเป็น null ให้เช็คแบบปกติ
  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  // จำนวน key ต้องเท่ากัน 
  if (keysA.length !== keysB.length) return false;

  // ไล่เช็คทุก key
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    // ถ้า value เป็น object ให้เช็คแบบ recursive
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

// Primitives
// console.log(deepEqual(5, 5)); // true
// console.log(deepEqual('a', 'a')); // false

// // Shallow objects
// console.log(deepEqual({ a: 1 }, { a: 1 })); // true
// console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// // Nested objects
// console.log(deepEqual({ a: { x: 1 } }, { a: { x: 1 } })); // true
console.log(deepEqual({ a: { x: 1 } }, { a: { x: 2 } })); // false

// // Arrays
// console.log(deepEqual([1, 2, [3]], [1, 2, [3]])); // true


