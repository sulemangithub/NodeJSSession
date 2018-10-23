/*This is asynchronous processing*/

function order(orderNumber,cb)
{
    console.log("Order Received..."+orderNumber);

    setTimeout(function(){
        cb(orderNumber);
    },1000);
}


function deliver(orderNumber)
{
    console.log("Order Delivered..."+orderNumber);
}

order(1,deliver);
order(2,deliver);
order(3,deliver);
