"use strict";

// -----------------------------------------------------------------------------
// Minimal Test Utilities
// -----------------------------------------------------------------------------
function deepEqual(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== typeof b) return false;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }
    const ak = Object.keys(a).sort();
    const bk = Object.keys(b).sort();
    if (!deepEqual(ak, bk)) return false;
    for (const k of ak) {
      if (!deepEqual(a[k], b[k])) return false;
    }
    return true;
  }
  return false;
}

function assertDeepEqual(actual, expected, message) {
  if (!deepEqual(actual, expected)) {
    throw new Error("❌ " + message + "\n  expected: " + JSON.stringify(expected) + "\n  actual:   " + JSON.stringify(actual));
  }
}

function runTest(name, fn) {
  try {
    fn();
    console.log("✅", name);
  } catch (err) {
    console.error("❌", name, "\n", err.message);
  }
}

// Keep results summary
const __results = { passed: 0, failed: 0 };
const __wrap = (name, testFn) => {
  try {
    testFn();
    console.log("✅", name);
    __results.passed++;
  } catch (e) {
    console.log("❌", name);
    console.log("   ", e.message);
    __results.failed++;
  }
};

function summary() {
  console.log("\n================ SUMMARY ================");
  console.log("Passed:", __results.passed, " Failed:", __results.failed);
  console.log("========================================\n");
}

// -----------------------------------------------------------------------------
// 01
// -----------------------------------------------------------------------------
/**
 * #01 sumAll(...nums)
 * รับตัวเลขไม่จำกัดจำนวนด้วย rest parameter และคืนผลรวมทั้งหมด
 * ตัวอย่าง: sumAll(1,2,3,4) -> 10
 */
function p01_sumAll(...nums) {
    if (arguments.length === 0) {
        return 0
    }
    return nums.reduce((acc,nums )=>{
        return acc + nums
    })
}


__wrap("#01 sumAll", () => {
  assertDeepEqual(p01_sumAll(1, 2, 3, 4), 10, "sum 1..4 = 10");
  assertDeepEqual(p01_sumAll(), 0, "empty -> 0");
});

// -----------------------------------------------------------------------------
// 02
// -----------------------------------------------------------------------------
/**
 * #02 multiplyAll(...nums)
 * รับตัวเลขไม่จำกัดจำนวน คืนค่าผลคูณทั้งหมด (ค่าว่างให้คืน 1)
 * ตัวอย่าง: multiplyAll(2,3,4) -> 24
 */
function p02_multiplyAll(...nums ) {
    if (arguments.length === 0 ) {
        return 1
    }
    // let acc = 1
    return nums.reduce((acc,nums)=>{
        return acc * nums
    })
}



__wrap("#02 multiplyAll", () => {
  assertDeepEqual(p02_multiplyAll(2, 3, 4), 24, "2*3*4=24");
  assertDeepEqual(p02_multiplyAll(), 1, "empty -> 1");
});

// // -----------------------------------------------------------------------------
// // 03
// // -----------------------------------------------------------------------------
// /**
//  * #03 maxAll(...nums)
//  * รับตัวเลขไม่จำกัดจำนวน คืนค่ามากสุด (ค่าว่างให้คืน -Infinity)
//  * ตัวอย่าง: maxAll(5,1,9,3) -> 9
//  */
function p03_maxAll(...nums ) {
    if (nums.length === 0) {
        return -Infinity
    }
    return nums.reduce((acc,nums)=>{
        if (nums > acc) {
            return nums
        }
        return acc
    })
}

__wrap("#03 maxAll", () => {
  assertDeepEqual(p03_maxAll(5, 1, 9, 3), 9, "max = 9");
  assertDeepEqual(p03_maxAll(), -Infinity, "empty -> -Infinity");
});

// // -----------------------------------------------------------------------------
// // 04
// // -----------------------------------------------------------------------------
// /**
//  * #04 minAll(...nums)
//  * รับตัวเลขไม่จำกัดจำนวน คืนค่าน้อยสุด (ค่าว่างให้คืน Infinity)
//  * ตัวอย่าง: minAll(5,1,9,3) -> 1
//  */
function p04_minAll(...nums ) {
    if (nums.length === 0) {
        return Infinity
    }
    
    return nums.reduce((acc,nums)=>{
       if (nums < acc) {
            return acc = nums
       }
       return acc
    }
)
}

__wrap("#04 minAll", () => {
  assertDeepEqual(p04_minAll(5, 1, 9, 3), 1, "min = 1");
  assertDeepEqual(p04_minAll(), Infinity, "empty -> Infinity");
});

// // -----------------------------------------------------------------------------
// // 05
// // -----------------------------------------------------------------------------
// /**
//  * #05 averageAll(...nums)
//  * รับตัวเลขไม่จำกัดจำนวน คืนค่าเฉลี่ย (ค่าว่างให้คืน NaN)
//  * ตัวอย่าง: averageAll(2,4,6) -> 4
//  */
function p05_averageAll(...nums ) {
    if (nums.length === 0) {
        return NaN
    }
    let sum =  nums.reduce((acc,nums)=>{
        return acc + nums
    }
)
    return sum / arguments.length
}

__wrap("#05 averageAll", () => {
  assertDeepEqual(Number.isNaN(p05_averageAll()), true, "empty -> NaN");
  assertDeepEqual(p05_averageAll(2, 4, 6), 4, "avg = 4");
});

// // -----------------------------------------------------------------------------
// // 06
// // -----------------------------------------------------------------------------
// /**
//  * #06 countArgs(...args)
//  * คืนจำนวนนับของ arguments ที่รับเข้ามา
//  * ตัวอย่าง: countArgs(1,2,3) -> 3
//  */
function p06_countArgs( ...args ) {
    return arguments.length
}

__wrap("#06 countArgs", () => {
  assertDeepEqual(p06_countArgs(1, 2, 3), 3, "3 args");
  assertDeepEqual(p06_countArgs(), 0, "0 args");
});

// // -----------------------------------------------------------------------------
// // 07
// // -----------------------------------------------------------------------------
// /**
//  * #07 concatAll(...parts)
//  * รับสตริงหลายส่วนแล้วรวมเป็นสตริงเดียวคั่นด้วยช่องว่างเดียว
//  * ตัวอย่าง: concatAll("hello","world") -> "hello world"
//  */

function p07_concatAll(...parts ) {
    if (parts.length === 0) {
        return ""
    }
    return parts.reduce((acc,words)=>{
        return acc + " " + words
    })
}

__wrap("#07 concatAll", () => {
  assertDeepEqual(p07_concatAll("hello", "world"), "hello world", "concat");
  assertDeepEqual(p07_concatAll(), "", "empty -> empty string");
});

// // -----------------------------------------------------------------------------
// // 08
// // -----------------------------------------------------------------------------
// /**
//  * #08 concatArrays(a, b)
//  * รวมอาร์เรย์ a และ b ด้วย spread ให้ได้อาร์เรย์ใหม่
//  * ตัวอย่าง: concatArrays([1,2],[3,4]) -> [1,2,3,4]
//  */
function p08_concatArrays( a, b ) {
    return [...a, ...b]
}

__wrap("#08 concatArrays", () => {
  assertDeepEqual(p08_concatArrays([1, 2], [3, 4]), [1, 2, 3, 4], "concat");
});

// // -----------------------------------------------------------------------------
// // 09
// // -----------------------------------------------------------------------------
// /**
//  * #09 cloneArray(arr)
//  * คืนอาร์เรย์ใหม่ที่เป็นการ clone arr ด้วย spread
//  * ตัวอย่าง: cloneArray([1,2]) -> [1,2] (ออปเจ็กต์ใหม่)
//  */
function p09_cloneArray(arr) {
    let b = []
    return b = [...arr]
}

__wrap("#09 cloneArray", () => {
  const a = [1, 2];
  const b = p09_cloneArray(a);
  assertDeepEqual(b, [1, 2], "equal items");
  assertDeepEqual(a === b, false, "different reference");
});

// // -----------------------------------------------------------------------------
// // 10
// // -----------------------------------------------------------------------------
// /**
//  * #10 cloneObject(obj)
//  * คืนอ็อบเจกต์ใหม่ที่ clone จาก obj แบบตื้น (shallow) ด้วย spread
//  * ตัวอย่าง: cloneObject({a:1}) -> {a:1} (ออปเจ็กต์ใหม่)
//  */
function p10_cloneObject(obj) {
    const copy = {...obj}
    return copy ;
}

__wrap("#10 cloneObject", () => {
  const o = { a: 1 };
  const c = p10_cloneObject(o);
  assertDeepEqual(c, { a: 1 }, "same shape");
  assertDeepEqual(o === c, false, "different ref");
});

// // -----------------------------------------------------------------------------
// // 11
// // -----------------------------------------------------------------------------
// /**
//  * #11 mergeObjectsShallow(a, b)
//  * รวมอ็อบเจกต์ b ทับ a แบบ shallow ด้วย spread
//  * ตัวอย่าง: mergeObjectsShallow({a:1,b:2},{b:9,c:3}) -> {a:1,b:9,c:3}
//  */
function p11_mergeObjectsShallow(a, b) {
    let merge = {...a , ...b}
    return merge
}


__wrap("#11 mergeObjectsShallow", () => {
  assertDeepEqual(
    p11_mergeObjectsShallow({ a: 1, b: 2 }, { b: 9, c: 3 }),
    { a: 1, b: 9, c: 3 },
    "merged"
  );
});

// // -----------------------------------------------------------------------------
// // 12
// // -----------------------------------------------------------------------------
// /**
//  * #12 mergeArraysUnique(...arrays)
//  * รวมหลายอาร์เรย์แล้วเก็บค่าที่ไม่ซ้ำตามลำดับที่พบครั้งแรก
//  * ตัวอย่าง: mergeArraysUnique([1,2],[2,3],[3,4]) -> [1,2,3,4]
//  */

// ได้เรียนรู้ว่า ถ้า loop ดู ค่า array ใช้.inclues เเต่ถ้าloop
function p12_mergeArraysUnique(...arrays) {
    let mergeUnique = []
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length ; j++) {
            if (!mergeUnique.includes(arrays[i][j])) {
                mergeUnique.push(arrays[i][j])
            }
        }
    }
    return mergeUnique
}

__wrap("#12 mergeArraysUnique", () => {
  assertDeepEqual(
    p12_mergeArraysUnique([1, 2], [2, 3], [3, 4]),
    [1, 2, 3, 4],
    "unique"
  );
});

// // -----------------------------------------------------------------------------
// // 13
// // -----------------------------------------------------------------------------
// /**
//  * #13 prependAndAppend(arr, head, tail)
//  * สร้างอาร์เรย์ใหม่: [head, ...arr, tail]
//  * ตัวอย่าง: prependAndAppend([2,3],1,4) -> [1,2,3,4]
//  */
function p13_prependAndAppend( arr, head, tail ) {
    return [head,...arr,tail]
}

__wrap("#13 prependAndAppend", () => {
  assertDeepEqual(p13_prependAndAppend([2, 3], 1, 4), [1, 2, 3, 4], "wrap");
});

// // -----------------------------------------------------------------------------
// // 14
// // -----------------------------------------------------------------------------
// /**
//  * #14 insertBetween(arr, index, ...items)
//  * แทรก items ลงใน arr ตำแหน่ง index แล้วคืนอาร์เรย์ใหม่ (ไม่แก้ของเดิม)
//  * ตัวอย่าง: insertBetween([1,4],1,2,3) -> [1,2,3,4]

//   */
function p14_insertBetween( arr, index, ...items ) {
      return [
        ...arr.slice(0, index),
        ...items,
        ...arr.slice(index)
    ];
}

__wrap("#14 insertBetween", () => {
  assertDeepEqual(p14_insertBetween([1, 4], 1, 2, 3), [1, 2, 3, 4], "insert");
});

// // -----------------------------------------------------------------------------
// // 15
// // -----------------------------------------------------------------------------
// /**
//  * #15 flattenOneLevel(arr)
//  * แผ่ระดับเดียว: [1,[2,3],4] -> [1,2,3,4]
//  */
function p15_flattenOneLevel(arr ) {
    return arr.flat();
}

__wrap("#15 flattenOneLevel", () => {
  assertDeepEqual(p15_flattenOneLevel([1, [2, 3], 4]), [1, 2, 3, 4], "flat1");
});

// // -----------------------------------------------------------------------------
// // 16
// // -----------------------------------------------------------------------------
// /**
//  * #16 pickFirstTwo(arr)
//  * ดึงสมาชิกตัวที่ 1 และ 2 ด้วย array destructuring คืนเป็นอาร์เรย์ [a,b]
//  * ตัวอย่าง: pickFirstTwo([10,20,30]) -> [10,20]
//  */
function p16_pickFirstTwo(arr ) {
    const [first , second , ...rest] = arr
    return [first,second]
}

__wrap("#16 pickFirstTwo", () => {
  assertDeepEqual(p16_pickFirstTwo([10, 20, 30]), [10, 20], "first two");
});

// // -----------------------------------------------------------------------------
// // 17
// // -----------------------------------------------------------------------------
// /**
//  * #17 swapTwoVariables(a, b)
//  * สลับค่าของ a และ b ด้วย array destructuring คืน [b,a]
//  */
function p17_swapTwoVariables(a, b ) {
    return [b,a]
}

__wrap("#17 swapTwoVariables", () => {
  assertDeepEqual(p17_swapTwoVariables(5, 9), [9, 5], "swap");
});

// // -----------------------------------------------------------------------------
// // 18
// // -----------------------------------------------------------------------------
// /**
//  * #18 firstAndRest(arr)
//  * ดึงตัวแรกและที่เหลือด้วย [first, ...rest]
//  * คืน { first, rest }
//  */
function p18_firstAndRest(arr ) {
    const [first , ...rest] = arr;
    return {first: first , rest : [...rest]}
}

__wrap("#18 firstAndRest", () => {
  assertDeepEqual(p18_firstAndRest([7, 8, 9]), { first: 7, rest: [8, 9] }, "FR");
});

// // -----------------------------------------------------------------------------
// // 19
// // -----------------------------------------------------------------------------
/**
 * #19 getNameAndAge(person)
 * รับ {name, age} คืน [name, age] ด้วย object destructuring
 */
function p19_getNameAndAge(person ) {
    const {name, age } = person
    return [name , age]
}

__wrap("#19 getNameAndAge", () => {
  assertDeepEqual(p19_getNameAndAge({ name: "Ann", age: 21 }), ["Ann", 21], "na");
});

// // -----------------------------------------------------------------------------
// // 20
// // -----------------------------------------------------------------------------
// /**
//  * #20 renameKeys(user)
//  * รับ {firstName, lastName} แล้วคืน {fn:firstName, ln:lastName}
//  */
function p20_renameKeys( user ) {
    const {firstName : fn, lastName: ln} = user
    return {fn , ln}
}

__wrap("#20 renameKeys", () => {
  assertDeepEqual(
    p20_renameKeys({ firstName: "Ada", lastName: "Lovelace" }),
    { fn: "Ada", ln: "Lovelace" },
    "rename"
  );
});

// // -----------------------------------------------------------------------------
// // 21
// // -----------------------------------------------------------------------------
// /**
//  * #21 defaultsArray(arr)
//  * ใช้ default ใน array destructuring เช่น [a=1,b=2] จาก arr
//  * คืน [a,b]
//  * ตัวอย่าง: defaultsArray([,5]) -> [1,5]
//  */
function p21_defaultsArray(arr) {
    const [a = 1, b = 2] = arr;
    return [a, b];
}

__wrap("#21 defaultsArray", () => {
  assertDeepEqual(p21_defaultsArray([, 5]), [1, 5], "defaults");
  assertDeepEqual(p21_defaultsArray([9, 8]), [9, 8], "provided");
});

// // -----------------------------------------------------------------------------
// // 22
// // -----------------------------------------------------------------------------
// /**
//  * #22 defaultsObject(obj)
//  * ใช้ default ใน object destructuring เช่น {x=1,y=2}
//  * คืน [x,y]
//  */
function p22_defaultsObject(obj) {
    const { x = 1, y = 2 } = obj;
    return [x, y];
    
}

__wrap("#22 defaultsObject", () => {
  assertDeepEqual(p22_defaultsObject({ y: 9 }), [1, 9], "default x");
  assertDeepEqual(p22_defaultsObject({ x: 5, y: 6 }), [5, 6], "both");
});

// // -----------------------------------------------------------------------------
// // 23
// // -----------------------------------------------------------------------------
// /**
//  * #23 nestedObjectPick(obj)
//  * รับ { user: { profile: { id, role } } } คืน [id, role]
//  */
function p23_nestedObjectPick(obj) {
    let {user} =  obj
    let {profile} = user
    let {id , role} = profile
    return [id , role]
}

__wrap("#23 nestedObjectPick", () => {
  const input = { user: { profile: { id: 10, role: "admin" } } };
  assertDeepEqual(p23_nestedObjectPick(input), [10, "admin"], "nested");
});

// // -----------------------------------------------------------------------------
// // 24
// // -----------------------------------------------------------------------------
// /**
//  * #24 nestedArrayPick(arr)
//  * รับอาร์เรย์ซ้อน [[a,b],[c,d]] คืน [a,d]
//  */
function p24_nestedArrayPick(arr) {
    return [arr[0][0] , arr[arr.length - 1][arr[arr.length-1].length-1]]
}

__wrap("#24 nestedArrayPick", () => {
  assertDeepEqual(p24_nestedArrayPick([[1, 2], [3, 4]]), [1, 4], "pick corners");
});

// // -----------------------------------------------------------------------------
// // 25
// // -----------------------------------------------------------------------------
// /**
//  * #25 extractMixed(list)
//  * รับอาร์เรย์ของอ็อบเจกต์: [{id, items:[first,...]} , ...]
//  * คืน [id ของตัวแรก, first ของ items ตัวแรก]
//  */
function p25_extractMixed(list) {
    const [firstItem , ...rest]  = list;
    const {id , items} = firstItem
    return [id, items[0]]

}

__wrap("#25 extractMixed", () => {
  const list = [{ id: 7, items: ["a", "b"] }, { id: 8, items: ["x"] }];
  assertDeepEqual(p25_extractMixed(list), [7, "a"], "mixed");
});

// // -----------------------------------------------------------------------------
// // 26
// // -----------------------------------------------------------------------------
// /**
//  * #26 removeKey(obj, key)
//  * สร้างอ็อบเจกต์ใหม่ที่ไม่มี key ที่กำหนด โดยใช้ object rest ในการตัดทิ้ง
//  * ตัวอย่าง: removeKey({a:1,b:2}, 'a') -> {b:2}
//  */
// function p26_removeKey(/* obj, key */) {}

// __wrap("#26 removeKey", () => {
//   assertDeepEqual(p26_removeKey({ a: 1, b: 2 }, "a"), { b: 2 }, "remove a");
// });

// // -----------------------------------------------------------------------------
// // 27
// // -----------------------------------------------------------------------------
// /**
//  * #27 dropFirstN(arr, n)
//  * คืนอาร์เรย์ใหม่ที่ตัดสมาชิก n ตัวแรกออก
//  * ตัวอย่าง: dropFirstN([1,2,3,4,5],3) -> [4,5]
//  */
// function p27_dropFirstN(/* arr, n */) {}

// __wrap("#27 dropFirstN", () => {
//   assertDeepEqual(p27_dropFirstN([1, 2, 3, 4, 5], 3), [4, 5], "drop3");
// });

// // -----------------------------------------------------------------------------
// // 28
// // -----------------------------------------------------------------------------
// /**
//  * #28 takeFirstN(arr, n)
//  * คืนอาร์เรย์ใหม่ที่มีสมาชิก n ตัวแรก
//  * ตัวอย่าง: takeFirstN([1,2,3,4],2) -> [1,2]
//  */
// function p28_takeFirstN(/* arr, n */) {}

// __wrap("#28 takeFirstN", () => {
//   assertDeepEqual(p28_takeFirstN([1, 2, 3, 4], 2), [1, 2], "take2");
// });

// // -----------------------------------------------------------------------------
// // 29
// // -----------------------------------------------------------------------------
// /**
//  * #29 mergeUserSettings(defaults, overrides)
//  * รวมค่าตั้งค่า โดย overrides ทับ defaults แบบ shallow
//  */
// function p29_mergeUserSettings(/* defaults, overrides */) {}

// __wrap("#29 mergeUserSettings", () => {
//   const d = { theme: "light", size: "md" };
//   const o = { size: "lg" };
//   assertDeepEqual(p29_mergeUserSettings(d, o), { theme: "light", size: "lg" }, "merge");
// });

// // -----------------------------------------------------------------------------
// // 30
// // -----------------------------------------------------------------------------
// /**
//  * #30 arrayToObject(pairs)
//  * แปลงอาร์เรย์คู่คีย์เป็นอ็อบเจกต์ เช่น [["a",1],["b",2]] -> {a:1,b:2}
//  */
// function p30_arrayToObject(/* pairs */) {}

// __wrap("#30 arrayToObject", () => {
//   assertDeepEqual(
//     p30_arrayToObject([["a", 1], ["b", 2]]),
//     { a: 1, b: 2 },
//     "pairs->obj"
//   );
// });

// // -----------------------------------------------------------------------------
// // 31
// // -----------------------------------------------------------------------------
// /**
//  * #31 objectToArray(obj)
//  * แปลงอ็อบเจกต์เป็นอาร์เรย์คู่คีย์ เช่น {a:1,b:2} -> [["a",1],["b",2]]
//  */
// function p31_objectToArray(obj ) {}

// __wrap("#31 objectToArray", () => {
//   assertDeepEqual(
//     p31_objectToArray({ a: 1, b: 2 }),
//     [["a", 1], ["b", 2]],
//     "obj->pairs"
//   );
// });

// // -----------------------------------------------------------------------------
// // 32
// // -----------------------------------------------------------------------------
// /**
//  * #32 sumMatrixFirstRow(matrix)
//  * รับเมทริกซ์แบบอาร์เรย์ซ้อน [[...],[...]] ดึงแถวแรกแล้วหาผลรวม
//  * ตัวอย่าง: sumMatrixFirstRow([[1,2,3],[4,5,6]]) -> 6
//  */
// function p32_sumMatrixFirstRow(/* matrix */) {}

// __wrap("#32 sumMatrixFirstRow", () => {
//   assertDeepEqual(p32_sumMatrixFirstRow([[1, 2, 3], [4, 5, 6]]), 6, "row1 sum");
// });

// // -----------------------------------------------------------------------------
// // 33
// // -----------------------------------------------------------------------------
// /**
//  * #33 selectEvenIndexElements(...args)
//  * รับอาร์กิวเมนต์ไม่จำกัดและคืนค่าเฉพาะตัวที่ตำแหน่ง index คู่ [0,2,4,...]
//  */
// function p33_selectEvenIndexElements( ...args ) {}

// __wrap("#33 selectEvenIndexElements", () => {
//   assertDeepEqual(p33_selectEvenIndexElements("a", "b", "c", "d", "e"), ["a", "c", "e"], "even idx");
// });

// // -----------------------------------------------------------------------------
// // 34
// // -----------------------------------------------------------------------------
// /**
//  * #34 buildSentence(subject, ...words)
//  * ต่อคำทั้งหมดเป็นประโยคเดียวคั่นด้วยช่องว่าง (subject + words)
//  * ตัวอย่าง: buildSentence("I","love","JS") -> "I love JS"
//  */
// function p34_buildSentence(/* subject, ...words */) {}

// __wrap("#34 buildSentence", () => {
//   assertDeepEqual(p34_buildSentence("I", "love", "JS"), "I love JS", "sentence");
// });

// // -----------------------------------------------------------------------------
// // 35
// // -----------------------------------------------------------------------------
// /**
//  * #35 argsToArray(...args)
//  * แปลง arguments ทั้งหมดให้เป็นอาร์เรย์ใหม่
//  */
// function p35_argsToArray( ...args ) {}

// __wrap("#35 argsToArray", () => {
//   assertDeepEqual(p35_argsToArray(1, "a", true), [1, "a", true], "args arr");
// });

// // -----------------------------------------------------------------------------
// // 36
// // -----------------------------------------------------------------------------
// /**
//  * #36 zipArrays(a, b)
//  * จับคู่สมาชิกตำแหน่งเดียวกันเป็นคู่ เช่น [1,2] และ ["a","b"] -> [[1,"a"],[2,"b"]]
//  */
// function p36_zipArrays(a, b ) {}

// __wrap("#36 zipArrays", () => {
//   assertDeepEqual(p36_zipArrays([1, 2], ["a", "b"]), [[1, "a"], [2, "b"]], "zip");
// });

// // -----------------------------------------------------------------------------
// // 37
// // -----------------------------------------------------------------------------
// /**
//  * #37 unzipPairs(pairs)
//  * ผกกลับจากคู่ เป็นอาร์เรย์ 2 แห่ง: [[a1,a2,...],[b1,b2,...]]
//  */
// function p37_unzipPairs(/* pairs */) {}

// __wrap("#37 unzipPairs", () => {
//   assertDeepEqual(p37_unzipPairs([[1, "a"], [2, "b"]]), [[1, 2], ["a", "b"]], "unzip");
// });

// // -----------------------------------------------------------------------------
// // 38
// // -----------------------------------------------------------------------------
// /**
//  * #38 pickTopTwoNumbers(...nums)
//  * คืนเลขมากสุดสองจำนวนเป็นอาร์เรย์ [max1, max2]
//  */
// function p38_pickTopTwoNumbers(...nums ) {}

// __wrap("#38 pickTopTwoNumbers", () => {
//   assertDeepEqual(p38_pickTopTwoNumbers(5, 1, 9, 7), [9, 7], "top2");
// });

// // -----------------------------------------------------------------------------
// // 39
// // -----------------------------------------------------------------------------
// /**
//  * #39 mergeAndSortArrays(...arrays)
//  * รวมทุกอาร์เรย์แล้วเรียงจากน้อยไปมาก คืนอาร์เรย์ใหม่
//  */
// function p39_mergeAndSortArrays(/* ...arrays */) {}

// __wrap("#39 mergeAndSortArrays", () => {
//   assertDeepEqual(p39_mergeAndSortArrays([3, 1], [4, 2]), [1, 2, 3, 4], "sort");
// });

// // -----------------------------------------------------------------------------
// // 40
// // -----------------------------------------------------------------------------
// /**
//  * #40 uniqueValues(...arrays)
//  * รวมหลายอาร์เรย์และคืนค่าไม่ซ้ำตามลำดับที่ปรากฏครั้งแรก
//  */
// function p40_uniqueValues(/* ...arrays */) {}

// __wrap("#40 uniqueValues", () => {
//   assertDeepEqual(p40_uniqueValues([1, 2, 2], [2, 3], [3, 4]), [1, 2, 3, 4], "unique");
// });

// // -----------------------------------------------------------------------------
// // 41
// // -----------------------------------------------------------------------------
// /**
//  * #41 shallowCompareObjects(a, b)
//  * เปรียบเทียบแบบตื้น: คีย์และค่า (primitive) เท่ากันหมด -> true
//  */
// function p41_shallowCompareObjects(a, b ) {}

// __wrap("#41 shallowCompareObjects", () => {
//   assertDeepEqual(p41_shallowCompareObjects({ x: 1, y: 2 }, { y: 2, x: 1 }), true, "same");
//   assertDeepEqual(p41_shallowCompareObjects({ x: 1 }, { x: 2 }), false, "diff");
// });

// // -----------------------------------------------------------------------------
// // 42
// // -----------------------------------------------------------------------------
// /**
//  * #42 getLastArg(...args)
//  * คืนอาร์กิวเมนต์ตัวสุดท้าย หรือ undefined ถ้าไม่มี
//  */
// function p42_getLastArg( ...args ) {}

// __wrap("#42 getLastArg", () => {
//   assertDeepEqual(p42_getLastArg(1, 2, 3), 3, "last=3");
//   assertDeepEqual(p42_getLastArg(), undefined, "none");
// });

// // -----------------------------------------------------------------------------
// // 43
// // -----------------------------------------------------------------------------
// /**
//  * #43 countTypes(...args)
//  * คืนอ็อบเจกต์นับจำนวนชนิดข้อมูลแต่ละประเภทจาก args
//  * ตัวอย่างผลลัพธ์: { number: 2, string: 1, boolean: 0, object: 1, undefined: 0, function: 0, symbol: 0, bigint: 0 }
//  */
// function p43_countTypes( ...args ) {}

// __wrap("#43 countTypes", () => {
//   const f = function () {};
//   const s = Symbol("x");
//   const r = p43_countTypes(1, 2, "a", true, { x: 1 }, undefined, f, s, 10n);
//   assertDeepEqual(
//     r,
//     { number: 2, string: 1, boolean: 1, object: 1, undefined: 1, function: 1, symbol: 1, bigint: 1 },
//     "type counts"
//   );
// });

// // -----------------------------------------------------------------------------
// // 44
// // -----------------------------------------------------------------------------
// /**
//  * #44 mapObject(obj, mapper)
//  * คืนอ็อบเจกต์ใหม่ที่ map value ด้วยฟังก์ชัน mapper(v, k)
//  */
// function p44_mapObject(/* obj, mapper */) {}

// __wrap("#44 mapObject", () => {
//   const r = p44_mapObject({ a: 1, b: 2 }, (v, k) => v * 10);
//   assertDeepEqual(r, { a: 10, b: 20 }, "map values");
// });

// // -----------------------------------------------------------------------------
// // 45
// // -----------------------------------------------------------------------------
// /**
//  * #45 excludeKeys(obj, ...keys)
//  * คืนอ็อบเจกต์ใหม่ที่ตัดคีย์ที่ระบุออก
//  */
// function p45_excludeKeys(/* obj, ...keys */) {}

// __wrap("#45 excludeKeys", () => {
//   assertDeepEqual(p45_excludeKeys({ a: 1, b: 2, c: 3 }, "b", "c"), { a: 1 }, "exclude");
// });

// // -----------------------------------------------------------------------------
// // 46
// // -----------------------------------------------------------------------------
// /**
//  * #46 includeKeys(obj, ...keys)
//  * คืนอ็อบเจกต์ใหม่ที่มีเฉพาะคีย์ที่ระบุเท่านั้น
//  */
// function p46_includeKeys(/* obj, ...keys */) {}

// __wrap("#46 includeKeys", () => {
//   assertDeepEqual(p46_includeKeys({ a: 1, b: 2, c: 3 }, "b", "c"), { b: 2, c: 3 }, "include");
// });

// // -----------------------------------------------------------------------------
// // 47
// // -----------------------------------------------------------------------------
// /**
//  * #47 updateUser(user, updates)
//  * คืนอ็อบเจกต์ใหม่ที่รวม updates ทับ user (shallow)
//  */
// function p47_updateUser(/* user, updates */) {}

// __wrap("#47 updateUser", () => {
//   const u = { id: 1, name: "A", age: 20 };
//   const up = { age: 21 };
//   assertDeepEqual(p47_updateUser(u, up), { id: 1, name: "A", age: 21 }, "update");
// });

// // -----------------------------------------------------------------------------
// // 48
// // -----------------------------------------------------------------------------
// /**
//  * #48 pickCity(user)
//  * รับ { address: { city } } แล้วคืนค่า city
//  */
// function p48_pickCity(/* user */) {}

// __wrap("#48 pickCity", () => {
//   const u = { name: "B", address: { city: "Bangkok", zip: "10110" } };
//   assertDeepEqual(p48_pickCity(u), "Bangkok", "city");
// });

// // -----------------------------------------------------------------------------
// // 49
// // -----------------------------------------------------------------------------
// /**
//  * #49 swapFirstAndLast(arr)
//  * สลับสมาชิกตัวแรกและตัวสุดท้าย คืนอาร์เรย์ใหม่
//  * ตัวอย่าง: swapFirstAndLast([1,2,3,4]) -> [4,2,3,1]
//  */
// function p49_swapFirstAndLast(arr ) {}

// __wrap("#49 swapFirstAndLast", () => {
//   assertDeepEqual(p49_swapFirstAndLast([1, 2, 3, 4]), [4, 2, 3, 1], "swap ends");
// });

// // -----------------------------------------------------------------------------
// // 50
// // -----------------------------------------------------------------------------
// /**
//  * #50 spreadStringToArray(str)
//  * แตกสตริงเป็นอาร์เรย์ของตัวอักษรด้วย spread
//  * ตัวอย่าง: spreadStringToArray("สวัสดี") -> ["ส","ว","ั","ส","ด","ี"]
//  */
// function p50_spreadStringToArray(/* str */) {}

// __wrap("#50 spreadStringToArray", () => {
//   assertDeepEqual(p50_spreadStringToArray("hello"), ["h", "e", "l", "l", "o"], "chars");
// });

// // -----------------------------------------------------------------------------
// // Run Summary
// // -----------------------------------------------------------------------------
// summary();
