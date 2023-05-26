function calculardata () {
    
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById("renda").value);
    let pessoas = parseInt(document.getElementById('pessoas').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    rendapercapita = (renda / pessoas)
    
    if (idadeconver >= 16 && rendapercapita <= 1.5) {
        document.getElementById('mostrarcurso').innerHTML = ('Seja Bem-Vindo!')
    } else if (idadeconver < 16) {
        document.getElementById('mostrarcurso').innerHTML = ('')
    } else if (rendapercapita > 1.5 ) {
        document.getElementById('mostrarcurso').innerHTML = ('')
    } else  {
        document.getElementById('mostrarcurso').innerHTML = ('')
    }
        

}