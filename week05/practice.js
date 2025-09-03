const studentScores = [
    {name : "Alice" , score : 85},
    {name : "Bob" , score : 80},
]
console.log(Object.entries(studentScores[1]));
// function getPassingNames(studentScores) {
//     return studentScores
//         .filter(student => student.score >= 60)
//         .map(std=> std.name.toUpperCase())
// }

// console.log(getPassingNames(studentScores));

const i = {name : "Alice" , score : 85};
console.log(i.name);