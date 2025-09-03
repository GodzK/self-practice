const words = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
//  console.log(employees.map(index =>{
//     return index.firstname + " " + index.lastname
// }));

let result = []
let startWithA = []

let jaiCrew = employees
  .map(word => (word.firstname.toLowerCase().includes("jai") || word.lastname.toLowerCase().includes("jai")) ? word : null)
  .filter(word => word !== null)

console.log(jaiCrew)
