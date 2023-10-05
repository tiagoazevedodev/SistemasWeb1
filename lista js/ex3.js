function loop() {
    var inicial = parseInt(document.getElementById("inicial").value);
    var final = parseInt(document.getElementById("final").value);
    
    for (inicial;inicial <= final;inicial++) {
        document.write(inicial+"<br>")
    }
}