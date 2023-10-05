
function calcularSoma() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    var z = x+y;
    alert("x + y = "+ z)    
}

function calcularDiv() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    
    
    if (y == 0) {
        alert("Não da né parceiro");
    }else {
        var z = x/y;
        alert("x : y = "+ z);
    }
}

function calcularMult() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    var z = x*y;
    alert("x * y = "+ z)    
}

function calcularSub() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    var z = x-y;
    alert("x - y = "+ z)    
}