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

function calcularmedia(){
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);

    let media = (n1 + n2 + n3) / 3;
    console.log(media)
    document.getElementById("resultado").textContent = "Média: " + media.toFixed(2);
    return media
    
}

function calcularPresencas(){
    let dia1 = parseInt(document.querySelector('input[name="dia1"]:checked').value)
    let dia2 = parseInt(document.querySelector('input[name="dia2"]:checked').value)
    let dia3 = parseInt(document.querySelector('input[name="dia3"]:checked').value)
    let dia4 = parseInt(document.querySelector('input[name="dia4"]:checked').value)
    let dia5 = parseInt(document.querySelector('input[name="dia5"]:checked').value)
    let dia6 = parseInt(document.querySelector('input[name="dia6"]:checked').value)
    let dia7 = parseInt(document.querySelector('input[name="dia7"]:checked').value)
    let dia8 = parseInt(document.querySelector('input[name="dia8"]:checked').value)
    let dia9 = parseInt(document.querySelector('input[name="dia9"]:checked').value)
    let dia10 = parseInt(document.querySelector('input[name="dia10"]:checked').value)
    let dia11 = parseInt(document.querySelector('input[name="dia11"]:checked').value)
    let dia12 = parseInt(document.querySelector('input[name="dia12"]:checked').value)
    let presenca = dia1 + dia2 + dia3 + dia4 + dia5 + dia6 + dia7 + dia8 + dia9 + dia10 + dia11 + dia12
    console.log(presenca)
    let percentual = parseInt((presenca / 12) * 100)
    return percentual
    }


function  aprovacao() {
    let media = calcularmedia();
    console.log(media)
    let presencas = calcularPresencas();
    console.log(presencas)

    resultado = document.getElementById("resultado");

    if (media >= 6.0 && presencas >= 75) {
        document.getElementById('resultado').innerHTML = "Aluno Aprovado!";
    }
    else if (media >= 5 && media < 6 && presencas >= 75) {
        document.getElementById('resultado').innerHTML =  "Recuperação!";
    }
    else {
        document.getElementById('resultado').innerHTML =  "Aluno Reprovado!";
    }
}
