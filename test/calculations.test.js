const { expect } = require('chai');
const { add, subtract, multiplyNumbers,divideNumbers, doWhateverCalculation  } = require('../calculations');

describe('Math Functions', () => {
  describe('add two numbers', () => {
    it('should add two numbers correctly', () => {
      const result = doWhateverCalculation(add,[2, 3]);
      expect(result).to.equal(5);
    });
  });

  describe('subtract two numbers', () => {
    it('should subtract the two numbers correctly', () => {
      const result = doWhateverCalculation(subtract,[5,3] );
      expect(result).to.equal(2);
    })
  })

  describe('multiply two numbers', () => {
    it('should multiply the two numbers correctly', () => {
      const product = doWhateverCalculation(multiplyNumbers, [3,4]);
      expect(product).to.equal(12);
    })
  })

  describe('divide two numbers', () => {
    it('should divide two given numbers correctly', () => {
      const quotient = doWhateverCalculation(divideNumbers, [16,4]);
      expect(quotient).to.equal(4);
    })
  })
  
});
