// Project02 : lotto2  

// 1. กรอกตัวเลขเพื่อรับค่าเข้ามา
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ :")
let random_number = Math.floor(Math.random() * 100)

// 2. 
document.getElementById("random").innerHTML = random_number

if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย!คุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย!คุณไม่ถูกรางวัล"
}