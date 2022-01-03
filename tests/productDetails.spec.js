const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    // Ref dos dois expect abaixo: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    // Ref do Array.isArray: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    expect(Array.isArray(productDetails('Alcool gel','Máscara'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel','Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Ref do Object.prototype.toString.call: https://doctorderek.medium.com/using-object-prototype-tostring-call-to-check-for-a-number-in-javascript-5dfb33edb6c5
    expect(Object.prototype.toString.call(productDetails('Alcool gel','Máscara')[0])).toBe('[object Object]');
    expect(Object.prototype.toString.call(productDetails('Alcool gel','Máscara')[1])).toBe('[object Object]');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Ref: https://jestjs.io/pt-BR/docs/expect#toequalvalue
    expect(productDetails('Alcool gel','Máscara')[0]).not.toEqual(productDetails('Alcool gel','Máscara')[1]);
    // Teste se os dois productIds terminam com 123.
    // Refs: https://jestjs.io/pt-BR/docs/expect#tomatchregexp--string e https://aiqon.com.br/blog/expressoes-regulares-para-iniciantes/
    expect(productDetails('Alcool gel','Máscara')[0].details.productId).toMatch(new RegExp('123$'));
    expect(productDetails('Alcool gel','Máscara')[1].details.productId).toMatch(new RegExp('123$'));
  });
});
