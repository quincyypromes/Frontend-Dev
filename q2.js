let productName = " wireless headphones PRO ";

let cleaned = productName.trim().toLowerCase();
let words = cleaned.split(" ");
let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let title = capitalizedWords.join(" ");
title = title.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", title);
console.log("Length:", title.length);
