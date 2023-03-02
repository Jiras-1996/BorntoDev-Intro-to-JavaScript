// Project01 : lotto version 1

// 1. กรอกตัวเลขเพื่อรับค่าเข้ามา
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ :")
// console.log(lotto_number)

// ฟังก์ชั่น Math.random สำหรับใช้ในการสุ่มตัวเลข
// console.log(Math.floor(Math.random() * 100))

// 2. ทำการสุ่มตัวเลขและแสดงผลค่าออกมา
// innerHTML จะสามารถใส่โค้ด HTML ลงไปได้ด้วย
document.getElementById("your_number").innerHTML = lotto_number
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)