
function order(orderNumber)
{
    console.log("Order Received....."+orderNumber);
    deliver(orderNumber);
}


function deliver(orderNumber)
{
    console.log("Order Delivered....."+orderNumber);
}

order(1);
order(2);
order(3);
order(4);
order(5);
order(6);
order(7);
