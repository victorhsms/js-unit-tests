/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const ItsANumber = (array) => {
  let status = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (!(Number.isInteger(array[i]))) {
      status = undefined;
    }
  }

  return status;
};

const program = (array) => {
  let media = 0;

  media = ItsANumber(array);

  if (media === 0) {
    for (let i = 0; i < array.length; i += 1) {
      media += array[i];
    }

    media = Math.round(media / array.length);
  }

  return media;
};

const average = (array) => {
  let resultado = 0;

  if (array.length === 0) {
    resultado = undefined;
  } else {
    resultado = program(array);
  }

  return resultado;
};

module.exports = average;
