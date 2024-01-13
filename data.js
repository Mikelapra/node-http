function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function min(a, b) {
    return a - b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
// Creo un objeto a exportar con las funciones:

  module.exports = {
    sum,
    multiply,
    min,
    div,
  };