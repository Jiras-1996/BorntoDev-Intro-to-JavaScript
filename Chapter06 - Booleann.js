// Chapter 06 : Boolean

// javascript ไม่สนใจ data type
console.log(1 == 1) // true
console.log(2 == 2) // true
console.log(3 == 3) // true
console.log(4 == "4") // true

console.log(5 == 6) // false

// ถ้าต้องการให้สนใจ data type ต้องใช้ ===
console.log(1 === 1) // true
console.log(2 === 2) // true
console.log("3" === "3") // true
console.log("hello" === "hello") // true
console.log(4 == "4") // false

// เครื่องหมายไม่เท่ากับ คือ != 
console.log("4" != "4")
console.log("Hello" != "hello") // เพราะ case sensitive
console.log("4" != 4) // false

// ถ้าต้องการให้สนใจ data type ต้องใช้ !==
console.log("4" != 4) // true

// Comparison operator
console.log(10 > 3)
console.log(5 < 10)
console.log(9 >= 10)
console.log(10 <= 10)