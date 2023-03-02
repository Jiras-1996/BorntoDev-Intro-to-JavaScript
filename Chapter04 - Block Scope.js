// Chapter 04 : Block Scope

// {} คือ ตัวบ่งบอกขอบเขตการทำงาน จะทำงานเฉพาะในขอบเขตนี้เท่านั้น
// var ไม่มีขอบเขตของการทำงานเหมือนกับ let
// เรียกใช้ let นอก {} จะขึ้น not define

{
    var x = 20
    let y = 15
    alert(y)
}
alert(x)

// Challenge 
// var จะเลือกแสดงค่าใน {} ก่อน

var a =20
{
    var a = 100
    let b = 15 
}
console.log(a)