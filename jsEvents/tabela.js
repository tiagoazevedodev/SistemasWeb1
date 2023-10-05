let preto = 0
let branco = 0
let verde = 0
let azul = 0 
let rosa = 0
function funcao(cor) {
    if (cor.id == "preto") {
        preto ++ 
        document.getElementById("saidaPreto").innerHTML=preto
    }
    if (cor.id == "branco") {
        branco ++
        document.getElementById("saidaBranco").innerHTML=branco 
    }
    if (cor.id == "verde") {
        verde ++
        document.getElementById("saidaVerde").innerHTML=verde
    }
    if (cor.id == "rosa") {
        rosa ++
        document.getElementById("saidaRosa").innerHTML=rosa
    }
    if (cor.id == "azul") {
        azul ++
        document.getElementById("saidaAzul").innerHTML=azul
    }
}