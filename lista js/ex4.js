var maior = 0
var menor = 100000
var valor1 = parseInt(prompt("Insira o valor 1"))
var valor2 = parseInt(prompt("Insira o valor 2"))
var valor3 = parseInt(prompt("Insira o valor 3"))
var valor4 = parseInt(prompt("Insira o valor 4"))

var lista = new Array(valor1,valor2,valor3,valor4);

for (item in lista) {
    if (lista[item] > maior) {
        maior = lista[item]
    }
    if (lista[item] < menor) {
        menor = lista[item]
    }
}
document.write("Maior =", maior)
document.write("<br>Menor =", menor)
