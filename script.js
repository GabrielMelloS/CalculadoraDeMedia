//pegando elementos da página com DOM e armazendo em variáveis
let result = window.document.getElementById('result');
let aprovado = window.document.getElementById('aprovado');

//obtém os valores inseridos e executa o cálculo da média, devolvendo a nota e aprovação
function media(){
  const primeiraProva = parseInt(window.document.getElementById('primeiraProva').value);
  const segundaProva = parseInt(window.document.getElementById('segundaProva').value);
  const terceiraProva = parseInt(window.document.getElementById('terceiraProva').value);
  const quartaProva = parseInt(window.document.getElementById('quartaProva').value);
   
  let resultado = (primeiraProva + segundaProva + terceiraProva + quartaProva) / 4;
  let notaFinal = resultado.toFixed(1);
  
  if (notaFinal >= 6){
    result.innerText = 'Parabéns, sua média foi: ' + notaFinal;
    aprovado.innerText = 'Aprovado ✔';
    aprovado.style.color = 'green';
  } else if (notaFinal < 6){
    result.innerText = 'Não foi dessa vez, sua média foi: ' + notaFinal;
    aprovado.innerText = 'Reprovado ❌ ';
    aprovado.style.color = 'red';
  } else {
    aprovado.innerText = 'Algo deu errado, tente inserir apenas números.';
     aprovado.style.color = 'red';
  }

}



//Pertence a Gabriel da S. Mello