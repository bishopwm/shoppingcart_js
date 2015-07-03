'use strict';
console.log('Fill your shopping cart. But keep in mind todays sales: ')
console.log('Apples BOGO. And when you buy 5 oranges, get 5 more for 50%off.')

var ShoppingCart = function () {
	this.contents = []
};

ShoppingCart.prototype.add = function (item) {
	this.contents.push(item);
}

var Item = function (name, price) {
	this.name = name;
	this.price = price;
}

ShoppingCart.prototype.appleDiscount = function () {
	var applecount = 0;
	for (var i = 0; i < this.contents.length; ++i) {
    	if (this.contents[i].name == 'apple') {
        	applecount++;
		}
		if (applecount == 2 && this.contents[i].name == 'apple') {
			this.contents[i].price = 0;
			applecount = 0;
		}
	}
}
ShoppingCart.prototype.orangeDiscount = function () {
	var orangecount = 0;
	for (var i = 0; i < this.contents.length; ++i) {
    	if (this.contents[i].name == 'orange') {
        	orangecount++;
		}
		if (orangecount >= 5 && this.contents[i].name == 'orange') {
			return (myCart.add(new Item('5 more oranges', 37.5)));
			orangecount = 0;
		}
	}
}


ShoppingCart.prototype.print = function (item) {
	var cart = '';
	for (var i = 0; i < this.contents.length; i++) {
		console.log('Added item: ' + this.contents[i].name);	
		console.log('At a price of: $' + this.contents[i].price);	
		console.log('-------------')	
	}
}

ShoppingCart.prototype.total = function (item) {
	var cart = '';
	var totalprice = 0
	for (var i = 0; i < this.contents.length; i++) {
		totalprice += this.contents[i].price
	}
		console.log('Total price: ' + totalprice)	
}

var apple = new Item('apple', 20);
var orange = new Item('orange', 15);
var banana = new Item('banana', 8);

var myCart = new ShoppingCart();
myCart.add(new Item('apple', 20))
myCart.add(new Item('apple', 20))
myCart.add(new Item('apple', 20))
myCart.add(new Item('apple', 20))
myCart.add(new Item('orange', 15))
myCart.add(new Item('orange', 15))
myCart.add(new Item('orange', 15))
myCart.add(new Item('orange', 15))
myCart.add(new Item('orange', 15))
myCart.add(new Item('orange', 15))
myCart.add(new Item('banana', 8))
myCart.add(new Item('banana', 8))
myCart.add(new Item('banana', 8))

myCart.appleDiscount()
myCart.orangeDiscount()
// myCart.removeItem()
myCart.print() 
myCart.total()

