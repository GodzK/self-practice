const obj = {
    name : "Phakaphol",
    age : 20
}

// Print only Key
for (const key in obj) {
    console.log(key);
}

// Print Key and value
for (const [i,j] of Object.entries(obj)) {;
    console.log(i,j);
}

// send Object as a property

// Object keep reference for find a data location in memory

function DoSomeThing(obj) {
    obj= {id : 1, name : "yoyo"},
    obj.name = "xxx"
}

const pet = {id : 1 , name : "yoyo"}
console.log(pet.name);
DoSomeThing(pet);
console.log(pet.name);

// เธอฟ้อนเอน ผมฟ้อนรำ - 025

function isInsensitive(obj1, obj2) {
  const normalize = (obj) => {
    const normalized = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const normalizedKey = key.toLowerCase();

        const value = obj[key];

        normalized[normalizedKey] =
          typeof value === "string" ? value.toLowerCase() : value;
      }
    }

    return normalized;
  };

  const norm1 = normalize(obj1);
  const norm2 = normalize(obj2);

  const keys1 = Object.keys(norm1);

  const keys2 = Object.keys(norm2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    (key) => norm2.hasOwnProperty(key) && norm1[key] === norm2[key]
  );
}

const objA = { name: "string", Age: 30 };
const objB = { Name: "string", Age: 30 };

console.log(isInsensitive(objA, objB));
