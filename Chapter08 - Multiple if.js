// Chapter 08 : Multiple if

// การใช้ if ซ้อนกันมากกว่า 3-4 ชั้น ควรมีปรับปรุงวิธีการคิดของโปรแกรม
// โปรแกรมที่มักจะไม่ได้มี if ซ้อนกันเยอะๆ
// if และ else if จะเข้าแค่เงื่อนไขเดียว

// 1. if => ถ้าเงื่อนไขเป็นจริงจะไม่ตรวจสอบเงื่อนไขใน else 

if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย!คุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย!คุณไม่ถูกรางวัล"
}

// 2. else if => ถ้าเงื่อนไขเป็นจริงจะไม่ตรวจสอบเงื่อนไขใน else if
// ถ้าเป็นจริงเมื่อไหร่ก็จะไปทำงานโค้ดปกติต่อเลย

let age = prompt("อายุของคุณ : ")
if(age  == 12)
{
    console.log("ไปเรียน ป.6 นะ")
}
else if(age == 13)
{

}
else if(age == 14)
{

}
else{

}