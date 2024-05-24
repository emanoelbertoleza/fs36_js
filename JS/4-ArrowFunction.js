let nome = 'Emanoel Bertoleza';

//Sem parâmetros sempre faz a mesma coisa
function converterMaiscula() {
    return nome.toUpperCase();
}


//Com parâmetros para que a função seja variável
function converterMaiscula(texto) {
    return texto.toUpperCase();
}

console.log(converterMaiscula())