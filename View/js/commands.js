/*Fazer um if para arredondar valores com casas decimais*/
function calcularFinanciamento() {
  var parcela = (calcularParcela());
  var financiamento = (parcela)*(document.getElementById('quantidadeParcelas').value);
  alert("Valor da parcela = " + parcela + "Valor total do financiamento = " + financiamento);
}

function calcularParcela() {
  var valorPorcentagem;
  var valorParcelaSemJuros;
  var valorParcelaComJuros;
  if(document.getElementById('valorEntrada').value==' ') {
    valorPorcentagem = ((document.getElementById('taxaDeJuros').value)/100)*(document.getElementById('valorSolicitado').value)
    valorParcelaSemJuros = (document.getElementById('valorSolicitado').value)/(document.getElementById('quantidadeParcelas').value);
    return valorParcelaComJuros = valorPorcentagem + valorParcelaSemJuros;
  }
  else {
    var aux = (document.getElementById('valorSolicitado').value) - (document.getElementById('valorEntrada').value);
    valorPorcentagem = ((document.getElementById('taxaDeJuros').value)/100)*(aux);
    valorParcelaSemJuros = (aux)/(document.getElementById('quantidadeParcelas').value);
    return valorParcelaComJuros = valorPorcentagem + valorParcelaSemJuros;
  }
}


/* Validação customizada do form para verificar regras*/
function enviarDados(){

  if(document.getElementById('tipoBem').value!='Novo'|| document.getElementById('tipoBem').value!='Usado') {
    alert( "Preencha campo NOME corretamente!" );
    document.getElementById('tipoBem').focus();
    return false;
  }
  else{
       alert( "Parabéns!!!!" );
       return true;
  }
}


/* Validação básica do form para verificar campos obrigatórios vazios*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



