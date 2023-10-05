var hour = new Date().getHours()
var minutes = new Date().getMinutes()
if (hour < 12) {
    document.write("Bom Dia<br>"+hour+":"+minutes)
}else if(hour > 12) {
    document.write("Boa Tarde")
}else{
    document.write("Boa Noite")
}