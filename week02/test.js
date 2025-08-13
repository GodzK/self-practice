const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
function shallowEqual(obj1,obj2) {
    // เช็ค same memory
    if (obj1 === obj2) {
        return true
    }
    if (typeof obj1 !== "object" || obj1 == null ||
        typeof obj2 !== "object" || obj2 == null
    ) {
        return false;
    }
    keyA = Object.keys(obj1)
    console.log(keyA);
    keyB = Object.keys(obj2)
    console.log(keyB);
    // กรองชั้นเเรกว่าขนาดเท่ากันไหม
    if (keyA.length !== keyB.length) {
        return false
    }
    // check ค่าข้างใน 
    for (let key of keyA) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
        
    }
    return true
}

console.log(shallowEqual({ a: 1 }, { a: 2 })); 