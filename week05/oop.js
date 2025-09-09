class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  introduce() {
    return `${this.name} is ${this.age} years old`
  }
}
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age)
    this.position = position
  }
  work() {
    return `${this.name} is working as a ${this.position}`
  }
}
class Manager extends Employee {
  constructor(name, age, position) {
    super(name, age, position)
  }
  work() {
    return `${this.name} is managing the team as a ${this.position}`
  }
}
class Company {
  static companyName = 'TechCorp'
  static getCompanyInfo() {
    return `Welcome to ${Company.companyName}`
  }
}
class Staff {
  #salary
  constructor(name, salary) {
    this.name = name
    this.#salary = salary
  }
  getSalary() {
    return this.#salary
  }
}
class Product {
  constructor(name, price) {
    this.name = name
    this._price = price
  }
  get price() {
    return this._price
  }
  set price(value) {
    if (value > 0) {
      this._price = value
    }
  }
}
class Shape {
  getArea() {
    return 0
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  getArea() {
    return Math.PI * this.radius * this.radius
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}
class Logger {
  static instance
  constructor() {
    if (Logger.instance) {
      return Logger.instance
    }
    Logger.instance = this
  }
  log(message) {
    console.log(message)
  }
}
