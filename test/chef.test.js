const { assert } = require("chai");
const { Chef } = require("../chef");

describe('Chef', () => {
  let chef = new Chef();

  it('should check that the dish has a valid name', () => {
    assert.typeOf(chef.checkMenu(), 'string');
  });

  it('should check that the dish is in the list of dishes', () => {
    let dish = chef.checkMenu();
    assert.include(chef.dishes, dish);
  });

  it('should check that the dish is not null', () => {
    let dish = chef.checkMenu();
    assert.isNotNull(dish);
  });

  it('should check for a dish in menu', () => {
    let dish = chef.checkMenu();
    assert.oneOf(dish, chef.dishes);
  })

})