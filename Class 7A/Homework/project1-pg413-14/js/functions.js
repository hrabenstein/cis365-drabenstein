
/* define your functions here 
Dassi Rabenstein
3/10/24 */

function calculateTotal(quantity, price)
{
    return (quantity * price);
}

//using data from the data.js file, this displays the data
function outputCartRow(item, total) 
{
    document.write('<tr><td><img src=images/' + item.product.filename + '></td><td>' + item.product.title + '</td><td>' + item.quantity + '</td><td>'+ item.product.price.toFixed(2) +'</td><td>'+ total.toFixed(2) +'</td></tr>');
}

// function calculatesubtotal(item)
// {
//     subtotal = subtotal + (item.product.price * item.quantity);
//     return subtotal;
// }

function calculateShipping(shipping_threshold, subtotal)
{
    if (subtotal > shipping_threshold)
    {
        return 0.00;
    }
    else
    {
        return 40.00;
    }
}








        
