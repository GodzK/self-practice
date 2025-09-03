const carts = [
  { productId: 1002, price: 10, amount: 5 }, 
  { productId: 2005, price: 100, amount: 2 }, 
  { productId: 5001, price: 5, amount: 4 },  
]

const totalPrice = carts.reduce((acc, item) => {
  return acc + ((item.price * item.amount) * 1.07)
}, 0)   

console.log("Total Price:", totalPrice) 

// คิด VAT 7%
const netPrice = totalPrice * 1.07
console.log("Net Price:", netPrice.toFixed(2))
