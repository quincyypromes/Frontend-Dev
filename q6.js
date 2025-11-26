let totalPurchase = 7200;

let discountPercent = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;

finalPrice = Math.round(finalPrice);
discountAmount = Math.round(discountAmount);

console.log("Original Total: ₹" + totalPurchase);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price after Discount: ₹" + finalPrice);
