function echo(msg) {
    return msg;
}

function getLength(madmax) {
    return madmax.length;
}

const avg = 4.0;

class Book {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

module.exports = { echo, getLength, Average: avg, Book };
