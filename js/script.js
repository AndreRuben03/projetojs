function calculardata () {
    
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById("renda").value);
    let pessoas = parseInt(document.getElementById('pessoas').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    rendapercapita = (renda / pessoas)
    
    if (idadeconver >= 16 && rendapercapita < 1500) {
        document.getElementById('resultado').innerHTML = ('Seja Bem-Vindo!')
    } else if (idadeconver < 16) {
        document.getElementById('resultado').innerHTML = ('Não foi possivel fazer o cadastro.')
    } else if (rendapercapita > 1500 ) {
        document.getElementById('resultado').innerHTML = ('Não foi possivel fazer o cadastro.')
    } else  {
        document.getElementById('resultado').innerHTML = ('Preencha os campos acima.')
    }
    
}