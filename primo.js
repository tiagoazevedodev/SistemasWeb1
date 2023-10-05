var x = parseInt(prompt("Insira o X: "))
div = 2 
primo = True

for (div ; div <= x**0.5 ; div++) {
    if (x % div == 0) {
        primo = False
    } 
}
if (primo == True){
    document.write(x, "Não é primo<br>")
}else{
    document.write(x, "É primo")
}