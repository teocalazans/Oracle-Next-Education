var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = paciente.textContent;

        if(nome != this.value) {
            paciente.classList.add("invisivel")
        }

        
    }

})