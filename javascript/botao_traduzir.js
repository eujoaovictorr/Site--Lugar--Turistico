
// Traduzir para o ingles
function traduzirParaIngles() {
  var paragrafo = document.querySelector('.geral');
  var texto = paragrafo.innerText;
    
    
  var traducao = {
    'Ponto Turístico': 'Tourist spot',
    'Início': 'Home',
    'Onde Ficar em  Maranhenses?': 'Where to Stay in Maranhenses?',
    'Pousadas e Hotéis': 'Inns and Hotels',
    'Onde se localiza Lençóis Maranhenses?': 'Where is Lencois Maranhenses located?'
  }
    
  for (palavra in traducao) {
    texto = texto.replace(new RegExp(palavra), traducao[palavra]);
  }
    
  paragrafo.innerText = texto;
}
function traduzirParaPortugues() {
  var paragrafo = document.querySelector('.geral');
  var texto = paragrafo.innerText;
      
      
  var traducao = {
    'Tourist spot' : 'Ponto Turístico',
    'Home' : 'Início',
    'Where to Stay in Maranhenses?' : 'Onde Ficar em  Maranhenses?',
    'Inns and Hotels' : 'Pousadas e Hotéis',
    'Where is Lencois Maranhenses located?' : 'Onde se localiza Lençóis Maranhenses?',
  }
      
  for (palavra in traducao) {
    texto = texto.replace(new RegExp(palavra), traducao[palavra]);
  }
      
  paragrafo.innerText = texto;
}