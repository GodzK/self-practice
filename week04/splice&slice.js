let arr = ["apple","orange","banana"];
// ตำเเหน่งที่จะเพิ่ม , 
arr.splice(2,0,"cherry","berry")
console.log(arr);

// delete 
let deleteItem2 = arr.splice(2,1,"Mango")
console.log(arr , "Delete Item : ", deleteItem2);


let animals = ['ant' , 'bison' , 'camel' , 'duck' , 'elephant']

console.log(animals.slice(2));