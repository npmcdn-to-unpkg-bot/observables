'use strict';

/* The callback hell

 function getProductDetails() {

 setTimeout(function () {
 console.log('Getting customers');
 setTimeout(function () {
 console.log('Getting orders');
 setTimeout(function () {
 console.log('Getting products');
 setTimeout(function () {
 console.log('Getting product details')
 }, 1000);
 }, 1000);
 }, 1000);
 }, 1000);
 };

 getProductDetails();
 */

function getCustomers(){

    let promise = new Promise(
        function (resolve, reject){

            console.log("Getting customers");
            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( "John Smith"); // got the customer
                }else{
                    reject("Can't get customers");
                }
            },1000);

        }
    );
    return promise;
}

function getOrders(customer){

    let promise =  new Promise(
        function (resolve, reject){

            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( `Found the order 123 for ${customer}`); // got the order
                }else{
                    reject("Can't get orders");
                }
            },1000);

        }
    );
    return promise;
}


getCustomers()
    .then(cust => console.log(cust))
    .then(cust => getOrders(cust))
    .then(order => console.log(order))
    .catch(err => console.error(err));

console.log("Chained getCustomers and getOrders. Waiting for results");  