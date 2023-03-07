// Chapter 09 : For loop

// 1. การวนลูปแบบมีรอบที่แน่นอน
// เริ่มต้นที่ตัวแปร counter มีค่าเริ่มต้นที่ 0 โดยถ้าค่ายังน้อยกว่า 5 ก็จะวนลูปไปเรื่อยๆ
// และหลังจากจบบรรทัดสุดท้ายของ {} ให้เพิ่มค่าตัวแปร counter +1 

// ใน {} เราสามารถใส่โค้ดอะไรลงไปก็ได้

for(var counter = 0; counter < 5; counter++)
{
    console.log("Hello" + counter) //counter มีไว้นับจำนวน
    console.log("Hello World" + counter)
}

console.log("Exit")