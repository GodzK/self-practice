function addProperty(obj,key,value) {
    obj[key] = value
    return obj
}


//console.log(addProperty({name: "john"},'age',25));

function mergeObject(obj1,obj2) {
    const arr = {...obj1,...obj2}
    return arr
}
//console.log(mergeObject({name: "john"} , {age : 25}));

function getFreqOfWord(sentence) {
    sentence = sentence.toLowerCase();
    const ansArr = {}
    const wordArr = sentence.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        if (ansArr[wordArr[i]] !== undefined && ansArr[wordArr[i]] !== " ") {
            ansArr[wordArr[i]] += 1
        }
        else{
            ansArr[wordArr[i]] = 1
        }
        
    }
    return ansArr
    
}
// console.log(getFreqOfWord("Today is present and present is your gift"));

function extractAndRename(obj) {
    let {name , age} = obj
    return {name : name , yearsOld : age}
}
// console.log(extractAndRename({name : "John" , age :25 , city : "New York"}));

function mergeAndDestructure(obj1,obj2) {
    const {name , age} = {...obj1 , ...obj2}
    return {name , age}
}

// console.log(mergeAndDestructure({name : "Jane"} , {age : 30 , country : 'USA'}));

function DuplicateWord(sentence) {
    const seen = new Set();
    return sentence.split(" ").filter(word => {
        const lower = word.toLowerCase();
        if (seen.has(lower)) {
            return false
        }
        else{
            seen.add(lower)
            return true
        }
    }).join(" ")
    
}
// console.log(DuplicateWord("This is a test this test is easy"));

function findValue(arr) {
    let ans = {min : arr[0] , max : arr[0] , sum : 0}
    for (let i = 0; i < arr.length; i++) {
        ans.sum += arr[i]
        if (arr[i] > ans.max) {
            ans.max = arr[i]
        }
        if (arr[i] < ans.min) {
            ans.min = arr[i]
        }
        
    }
    ans.avg = ans.sum / arr.length
    return ans
}
// console.log(findValue([1,2,3,4,5]));

function convertToUppercase(arr) {
    return arr.map(word => word.toUpperCase())
}

// console.log(convertToUppercase(['Hello' , "World"]));

function findMax(arr) {
    return arr.reduce((acc,index)=> acc > index ? acc : index)
}

// console.log(findMax([10,5,8,7]));


function removeFalsyValues(arr) {
    return arr.filter(word => Boolean(word))
}

// console.log(removeFalsyValues([0,1,false,2,"",3]));


function doubleAndFilterEvenNumbers(arr) {
   return arr.filter(num => num % 2 === 0).map(num => num * 2)
}

// console.log(doubleAndFilterEvenNumbers([1,2,3,4]));


function populateArray(length , value) {
    return Array(length).fill(value)
}

// console.log(populateArray(3,'a'));


function squareNumbers(arr) {
    return arr.map(num => num * num)
}
// console.log(squareNumbers([1,3,6,7]));

function processNumber(arr) {
    return arr.filter(value => value % 2 !== 0).map(num => num * num).reduce((acc , num)=> acc + num)
}
// console.log(processNumber([5,6,7,8]));


