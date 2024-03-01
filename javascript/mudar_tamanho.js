

// Aumentar o tamanho da fonte
function aumentarFonte() {
    var elementosTexto = document.getElementsByClassName('geral');
    for (var i = 0; i < elementosTexto.length; i++) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
        elementosTexto[i].style.fontSize = (tamanhoFonteAtual + 2) + 'px';
    }
}


// Diminuir o tamanho da fonte
function diminuirFonte() {
    var elementosTexto = document.getElementsByClassName('geral');
    
    for (var i = 0; i < elementosTexto.length; i++) {
        var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
        elementosTexto[i].style.fontSize = (tamanhoFonteAtual - 2) + 'px';
    }
}