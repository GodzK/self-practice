// Basic Programming Exercises - 50 Questions
// Each exercise includes a description, input/output examples, and its learning objective

// 1. Write a function that accepts unlimited numbers using rest parameter and returns their sum.
// Input: sumAll(1, 2, 3, 4)
// Output: 10
// Objective: Practice using rest parameter.
function sumAll(...numbers) {
    return numbers.reduce((acc,num)=>
        {
           return acc + num  
        } 
    )
}
console.log("ข้อที่ 1",sumAll(1,2,3,50));
// 2. Write a function that finds the maximum value from a set of numbers using rest parameter.
// Input: findMax(4, 10, 2, 8)
// Output: 10
// Objective: Understand how to collect multiple arguments with rest.

function findMax(...items) {
    if (arguments.length == 0) {
        return "No items"
    }
    let max = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    } return max
}

console.log("ข้อที่ 2",findMax(4, 10, 2, 8));
// 3. Create a function that takes rest parameters and returns them as an array.
// Input: collectArgs("a", "b", "c")
// Output: ["a", "b", "c"]
// Objective: Learn how rest packs arguments into an array.

function collectArgs(...items) {
    let packArr = [...items]
    return packArr
}
console.log("ข้อที่ 3",collectArgs("a", "b", "c"));

// 4. Write a function that multiplies all numbers provided as arguments.
// Input: multiplyAll(2, 3, 4)
// Output: 24
// Objective: Rest parameter with reduce().


// 5. Write a function that joins multiple strings passed as arguments into one string.
// Input: joinStrings("Hello", "World", "!")
// Output: "HelloWorld!"
// Objective: Using rest parameter with strings.

// 6. Use spread operator to copy an array without referencing the original.
// Input: const arr = [1,2,3]; const copy = [...arr];
// Output: copy = [1,2,3]
// Objective: Spread parameter for shallow copy.

// 7. Merge two arrays using spread operator.
// Input: const arr1 = [1,2]; const arr2 = [3,4]; const merged = [...arr1, ...arr2];
// Output: merged = [1,2,3,4]
// Objective: Practice array merging with spread.

// 8. Use spread operator to pass array elements as arguments to Math.max.
// Input: const numbers = [5,7,2]; Math.max(...numbers);
// Output: 7
// Objective: Spread for function arguments.

// 9. Clone an object using spread operator.
// Input: const person = {name: "Suda", age: 20}; const clone = {...person};
// Output: clone = {name: "Suda", age: 20}
// Objective: Practice shallow copy of objects.

// 10. Combine two objects using spread operator.
// Input: const a = {x:1}; const b = {y:2}; const c = {...a,...b};
// Output: c = {x:1, y:2}
// Objective: Spread operator for object merging.

// 11. Write a function that accepts a person object and destructures name and age.
// Input: getPersonInfo({name: "Suda", age: 21})
// Output: "Name: Suda, Age: 21"
// Objective: Basic object destructuring.

// 12. Destructure the first and second items from an array.
// Input: const arr = ["apple", "banana", "cherry"]; const [first, second] = arr;
// Output: first = "apple", second = "banana"
// Objective: Basic array destructuring.

// 13. Destructure an object with nested address property.
// Input: const person = {name:"Suda", address:{city:"Bangkok"}}; const {address:{city}} = person;
// Output: city = "Bangkok"
// Objective: Nested object destructuring.

// 14. Destructure with default values.
// Input: const {name, age=25} = {name:"Suda"};
// Output: name = "Suda", age = 25
// Objective: Default values in destructuring.

// 15. Swap two variables using array destructuring.
// Input: let a=1,b=2; [a,b] = [b,a];
// Output: a=2, b=1
// Objective: Variable swap with destructuring.

// 16. Skip items in array destructuring.
// Input: const arr = [10,20,30,40]; const [first,,third] = arr;
// Output: first=10, third=30
// Objective: Skipping items.

// 17. Use rest in array destructuring.
// Input: const arr = [1,2,3,4]; const [head, ...tail] = arr;
// Output: head=1, tail=[2,3,4]
// Objective: Rest in array destructuring.

// 18. Combine destructuring and renaming variables.
// Input: const {name:fullName} = {name:"Suda"};
// Output: fullName = "Suda"
// Objective: Aliasing in destructuring.

// 19. Nested array destructuring.
// Input: const arr = [1,[2,3]]; const [a,[b,c]] = arr;
// Output: a=1, b=2, c=3
// Objective: Nested array unpacking.

// 20. Function parameter destructuring.
// Input: function greet({name}) { return `Hi ${name}`; } greet({name:"Suda"})
// Output: "Hi Suda"
// Objective: Destructuring directly in function params.

// 21. Write a function that extracts first and last from an array argument.
// Input: getEnds([1,2,3,4])
// Output: [1,4]
// Objective: Array destructuring in function params.

// 22. Nested destructuring inside function parameters.
// Input: function showCity({address:{city}}){return city;} showCity({address:{city:"Bangkok"}})
// Output: "Bangkok"
// Objective: Nested object destructuring in function params.

// 23. Destructure mixed array and object.
// Input: const data=[{id:1, name:"Suda"}]; function getName([{name}]){return name;}
// Output: "Suda"
// Objective: Mixed destructuring.

// 24. Skipping elements in function param destructuring.
// Input: function pick([,second]){return second;} pick([10,20,30]);
// Output: 20
// Objective: Skipping with destructuring.

// 25. Combine spread and rest.
// Input: const arr=[1,2,3]; const arr2=[...arr,4,5];
// Output: [1,2,3,4,5]
// Objective: Use spread to extend arrays.

// 26. Spread with string to array.
// Input: [..."Suda"]
// Output: ["S","u","d","a"]
// Objective: Spread works with iterables.

// 27. Use spread with Set to remove duplicates.
// Input: const arr=[1,2,2,3]; [...new Set(arr)]
// Output: [1,2,3]
// Objective: Spread with Set.

// 28. Use rest in function to collect unknown arguments.
// Input: function logAll(...args){return args.length;} logAll(1,2,3,4);
// Output: 4
// Objective: Rest for flexible functions.

// 29. Use spread to split arguments.
// Input: Math.min(...[3,1,5])
// Output: 1
// Objective: Spread with Math functions.

// 30. Combine rest and spread.
// Input: function mergeArrays(...arrays){return [].concat(...arrays);} mergeArrays([1],[2,3])
// Output: [1,2,3]
// Objective: Practice rest+spread.

// 31. Deep nested destructuring.
// Input: const obj={user:{info:{id:1}}}; const {user:{info:{id}}}=obj;
// Output: id=1
// Objective: Deep nested destructuring.

// 32. Default with nested destructuring.
// Input: const obj={}; const {a:{b}= {b:2}} = obj;
// Output: b=2
// Objective: Defaults in nested destructuring.

// 33. Array destructuring with extra values.
// Input: const [x,y] = [1,2,3];
// Output: x=1,y=2
// Objective: Extra values are ignored.

// 34. Destructure function return.
// Input: function f(){return [1,2]}; const [a,b]=f();
// Output: a=1, b=2
// Objective: Destructuring function results.

// 35. Spread operator for shallow copy object.
// Input: const obj={x:1}; const copy={...obj};
// Output: {x:1}
// Objective: Spread for copying objects.

// 36. Override with spread.
// Input: const base={x:1}; const extended={...base,x:2};
// Output: {x:2}
// Objective: Spread overwrite property.

// 37. Rest in object destructuring.
// Input: const {a,...rest}={a:1,b:2,c:3};
// Output: rest={b:2,c:3}
// Objective: Rest properties.

// 38. Use array destructuring with function args.
// Input: function sum([a,b]){return a+b;} sum([2,3]);
// Output: 5
// Objective: Array destructuring as params.

// 39. Use object destructuring in loops.
// Input: const arr=[{id:1},{id:2}]; for(const {id} of arr){console.log(id);}
// Output: 1,2
// Objective: Destructuring in loops.

// 40. Nested destructuring with arrays in objects.
// Input: const obj={items:[1,2]}; const {items:[a,b]}=obj;
// Output: a=1,b=2
// Objective: Combine array+object destructuring.

// 41. Rest parameter with strings.
// Input: function concat(...chars){return chars.join("");} concat("a","b","c")
// Output: "abc"
// Objective: Rest with string arguments.

// 42. Spread string to function.
// Input: Math.max(..."1234")
// Output: 4
// Objective: Spread converts string to array.

// 43. Combine array and object destructuring.
// Input: const arr=[{id:1,name:"Suda"}]; const [{name}] = arr;
// Output: name="Suda"
// Objective: Array of objects destructuring.

// 44. Nested arrays in object.
// Input: const obj={data:[[1,2],[3,4]]}; const {data:[[a,b],[c,d]]}=obj;
// Output: a=1,b=2,c=3,d=4
// Objective: Nested array in object.

// 45. Object in array.
// Input: const arr=[1,{x:2}]; const [num,{x}] = arr;
// Output: num=1,x=2
// Objective: Mixed array/object destructuring.

// 46. Default in function param destructuring.
// Input: function f({x=1}={}){return x;} f()
// Output: 1
// Objective: Safe destructuring with defaults.

// 47. Use rest operator in array destructuring.
// Input: const [a,...b] = [1,2,3];
// Output: a=1, b=[2,3]
// Objective: Rest in array.

// 48. Swap variables with destructuring.
// Input: let x=5,y=10; [x,y]=[y,x];
// Output: x=10,y=5
// Objective: Swap using destructuring.

// 49. Spread nested array into another.
// Input: const arr=[1,[2,3]]; const flat=[...arr[1],4];
// Output: [2,3,4]
// Objective: Spread nested arrays.

// 50. Combined unpacking like given example.
// Input: const person=[{id:1,name:"Suda"}]; function getPersonName([{name}]){return name;} getPersonName(person)
// Output: "Suda"
// Objective: Combined array+object destructuring.
