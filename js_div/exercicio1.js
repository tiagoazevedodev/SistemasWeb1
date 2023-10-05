function mostrar() {
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var endereco = document.getElementById("endereco");
    var curso = document.getElementById("curso");
    alert("Idade: "+idade.value);
    alert("Nome: "+nome.value);
    alert("Endereco: "+endereco.value);
    alert("Curso: "+curso.value);
}
function mostrar_pelo_form() {
    var form = document.getElementById("form");
    alert("A idade é: " + form["idade"].value)
}