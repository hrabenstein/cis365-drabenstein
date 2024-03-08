const order ={
    salesDate : "May 5, 2016",
    product : {
	price: 500.00,
	brand: "Acer",
	output: function () {
	    return this.brand + ' $' + this.price;
	}
    },
    customer : {
	name: "Sue Smith",
	address: "123 Somewhere St",
	output: function () {
	    return this.name + ', ' + this.address;
	}
    }
};
alert(order.product.output());
alert(order.customer.output());
