
// CAPTURA GLOBAL DOS ELEMENTOS

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



// FUNÇÃO PRINCIPAL

function calcularIMC() {

  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('Por favor, insira valores válidos.');
    return;
  }

  // Cálculo

  const imc = peso / (altura * altura);

  // Template String
  mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classif(imc)}).`);
};

  // Classificação

function classif(x){

  if (x < 18.5) return 'Abaixo do peso';
  if (x < 25) return 'Peso normal';
  if (x < 30) return 'Sobrepeso';
  return 'Obesidade';  

};

// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inputPeso.focus();
  mostrarResultado('Preencha os campos e clique em "Calcular".');
}