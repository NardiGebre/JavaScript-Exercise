let price = 800;
let quantity = 10;
let discount = 0.35;
let taxrate = 0.07;

//( price $800 X quantity 10 = $8000 ) gross total;
//if (subtotal>10){discount = subtotal * discount;} else {discount = 0 };
//( total cost $8000 X discount 35% = $2800 ) discount;
//( total cost $8000 - discount $2800 = $5200 ) subtotal cost after discount;
//( subtotal cost $5200 X tax 7% = $364 ) tax;
//( subtotal cost $5200 + tax $364 = $5564 ) total cost;
let subtotal = price * quantity ;
let totalcostTimesDiscount = subtotal * discount ;
let totalcostMinusDiscount = subtotal - discount ; 
let totalcostTimesTax = totalcostMinusDiscount * taxrate ;
let totalcostPlusTax = totalcostTimesTax + totalcostMinusDiscount ;


console.log (`price times quantity: ${subtotal}`);

console.log (`totalcost times discount: ${totalcostTimesDiscount}`);

console.log (`totalcost minus discount: ${totalcostMinusDiscount}`);
console.log (`subtotalcost times tax: ${subtotalcostTimesTax}`);
console.log (`subtotalcost plus tax: ${subtotalcostPlusTax}`);

console.log (`orginal price: ${price}
quantity: ${quantity}
subtotal: ${subtotal}
discount: ${discount}
tax: ${taxrate}
totalcost: ${total}`);
