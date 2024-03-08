function calculateTotal(price,quantity) {
    let subtotal = price * quantity;
    return subtotal + calculateTax(subtotal);
    // this function is nested
    function calculateTax(subtotal) {
	let taxRate = 0.05;
	return subtotal * taxRate;
    }
}
