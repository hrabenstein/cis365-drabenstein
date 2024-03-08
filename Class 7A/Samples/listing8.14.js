// function constructor
function Customer(name,address,city) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.output = function () {
	return this.name + " " + this.address + " " + this.city;
    };
}
// create instances of object using function constructor
const cust1 = new Customer("Sue", "123 Somewhere", "Calgary");
alert(cust1.output());
const cust2 = new Customer("Fred", "32 Nowhere St", "Seattle");
alert(cust2.output());
