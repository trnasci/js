const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
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

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
  });
  it('Verifica se a função `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se a função `productDetails` retorna um array', () => {
    const prod = productDetails('Biscoito', 'Tomate');
    expect(Array.isArray(prod)).toBeTruthy();   
  });
  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    const prod = productDetails('Biscoito', 'Tomate');
    expect(prod.length).toEqual(2);   
  });
  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    const prod = productDetails('Biscoito', 'Tomate');
    expect(typeof prod[0] && typeof prod[1] ).toBe('object');   
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const prod = productDetails('Biscoito', 'Tomate');
    expect(prod[0] === prod[1] ).not.toBeTruthy();   
  });
  it('Verifica se se os dois productIds terminam com 123', () => {
    const prod = productDetails('Biscoito', 'Tomate');
    const prodId1 = prod[0].details.productId;
    const prodId2 = prod[1].details.productId;
    expect(prodId1 && prodId2).toMatch(/123/);   
  });
  
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  
});
