function placeAnOrder(orderNumber){

    console.log("Customer order: ", orderNumber);

    cookAndDeliverFood(function() {
        console.log("Delivered food order ", orderNumber);
    });
}

//simulate a 5 sec operation
function cookAndDeliverFood(callBack){
    setTimeout(callBack, 5000);
}


//Simulate users web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
