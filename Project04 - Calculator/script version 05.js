// Project 04 : Calculator

// += คือ การเพิ่มข้อมูลต่อจากเดิมไปเรื่อยๆ
// parseInt ใช้สำหรับแปลง data type

let qrt = prompt("จำนวนสินค้า")
let sum = 0

for(var i = 1; i <= qrt; i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่" + i) // รับข้อมูลจากผู้ใช้งานทีละชิ้น
    sum = sum + parseInt(item_price) // ผลรวมของสินค้าที่ได้เก็บในตัวแปร sum
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " : " + item_price + " บาท" + "<br>"
}

document.getElementById("result").innerHTML = "ราคารวม : " + sum + " บาท" // ทำให้โปรแกรมทำงานไม่หนัก