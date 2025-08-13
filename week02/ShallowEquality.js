function shallowEqual(objA, objB) {
  if (objA === objB) return true; 
  
  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (objA[key] !== objB[key]) return false;
  }

  return true;
}


// TestCase
// Primitives
console.log(shallowEqual(5, 5)); // true
console.log(shallowEqual('a', 'b')); // false

// Objects (shallow)
console.log(shallowEqual({ a: 1 }, { a: 1 })); // true
console.log(shallowEqual({ a: 1 }, { a: 2 })); // false

// Nested objects
console.log(shallowEqual({ a: { x: 1 } }, { a: { x: 1 } })); // false
