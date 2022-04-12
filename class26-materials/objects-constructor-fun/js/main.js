//Create a constructor with 4 properties and 3 methods
function MakePizza(size, toppings, sauce, crust) {
    this.size = size
    this.toppings = toppings   
    this.sauce = sauce
    this.crust = crust
    this.burnMouth = function() {console.log('dlkfgdsuyg9reihgkjdsfngb')}
    this.pizzaFrisbee = function() {console.log('yeeeEEEET!')}
    this.deliveryTime = function() {console.log('about 2 hours')}
}

let pizza = new MakePizza('xxxxxxL', ['spinach', 'garlic'],'marinara', 'deep dish')