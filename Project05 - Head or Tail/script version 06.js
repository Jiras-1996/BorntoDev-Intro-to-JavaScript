// Project05 - Head or Tail

// กำหนดจำนวนรอบที่จะเล่น
let round = prompt("คุณจะเล่นจำนวนกี่รอบ")

for(var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาได้เลย!!!")
    var random_answer = ""

    // Math.random เป็นฟังก์ชั่นอย่าลืมใส่() 
    if(Math.floor(Math.random() * 10) <= 4){
        random_answer = "หัว"
    }
    else{
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก! ยินดีด้วย")
    }
    else{
        alert("ตอบผิด! เสียใจดีด้วย")
    }

    console.log(random_answer + " : " + answer)
}