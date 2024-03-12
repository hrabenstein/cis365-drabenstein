
const tax_rate = prompt('Enter tax rate');
const shipping_threshold = prompt('Enter shipping threshold');
let subtotal = 0;

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   for(let item of cart)
   {
      outputCartRow(item, calculateTotal(item.product.price, item.quantity));
   }

   for (let item of cart)
   {
      // calculatesubtotal(item);
      subtotal = subtotal + (item.product.price * item.quantity);
   }

document.write('<tr class="totals"> <td colspan="4"> Subtotal </td> <td>$' + subtotal.toFixed(2) + '</td> </tr>');

document.write('<tr class="totals"> <td colspan="4">Tax</td> <td>$' + (tax_rate * subtotal) + '</td> </tr>');

document.write('<tr class="totals"><td colspan="4">Shipping</td><td>$' + calculateShipping(shipping_threshold, subtotal) + '</td> </tr>');