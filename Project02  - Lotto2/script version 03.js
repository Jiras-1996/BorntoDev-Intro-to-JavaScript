// Project02 : lotto2  

// 1. กรอกตัวเลขเพื่อรับค่าเข้ามา
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ :")

// 2. ทำการสุ่มตัวเลขและแสดงผลค่าออกมา
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100)