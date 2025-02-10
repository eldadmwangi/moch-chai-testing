var Chef = function() {
  this.dishes = ['Dosa', 'Tea', 'Pokoras', 'Chicken Tika', 'Bhajia' ];
};

Chef.prototype.checkMenu = function() {
  let dish = this.dishes[Math.floor(Math.random() * this.dishes.length)];

  console.log(' I would like to have:', dish);
  return dish;
}

let chef = new Chef();
chef.checkMenu();
module.exports = { Chef, chef };