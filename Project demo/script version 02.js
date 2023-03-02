let age = prompt("กรุณากรอกอายุของคุณ")
if(age > 13){

    // การจะแอดวีดีโฮจะต้องใส่ \ ไว้ทุกอันที่มีเครื่องหมายฟันหนู
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-caSicmzyWc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"

}else{
    alert("เสียใจด้วย! คุณอายุน้อยกว่า 13 ไปโตก่อนนะไอ้หนู555")
}